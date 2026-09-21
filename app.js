const menus = {
  insurance: [
    ['Vehicles', ['Auto','Motorcycle','RV & motorhome','Boat','ATV & off-road','Trailer']],
    ['Home & property', ['Homeowners','Renters','Condo','Rental property','Mobile home','Flood']],
    ['Family & future', ['Life insurance','Disability income','Annuities','Umbrella']],
    ['Business & farm', ['Business insurance','Commercial auto','Workers compensation','Farm','Bonds','Commercial umbrella']]
  ],
  manage: [
    ['Account', ['Sign in','Policy documents','Proof of insurance','Profile & preferences']],
    ['Billing', ['Pay a bill','Automatic payments','Payment history','Paperless options']],
    ['Policy changes', ['Add or replace a vehicle','Update contact information','Contact your agent']],
    ['Road services', ['Roadside assistance','Glass service','Temporary proof of insurance']]
  ],
  claims: [
    ['Claims', ['Report a claim','Track a claim','Open claims','Claims history']],
    ['After a loss', ['Auto accident checklist','Home damage checklist','Storm resources','What happens next']],
    ['Claim support', ['Upload documents','Find claim representative','Electronic payments','Contact claims']],
    ['Urgent help', ['Roadside assistance','After-hours claim help','Find your agent']]
  ],
  learn: [
    ['Coverage guides', ['Homeowners coverage','Auto coverage','Umbrella coverage','Renters coverage']],
    ['Insurance basics', ['Deductibles','Liability','Policy limits','Endorsements']],
    ['Savings', ['Discounts','Bundling','Paperless']],
    ['Resources', ['Glossary','FAQs','Articles','Coverage questions to ask your agent']]
  ]
};

const productGroups = [
  {title:'Vehicles',description:'Things you drive, tow or ride',items:['Auto','Motorcycle','RV & motorhome','Boat','ATV & off-road','Trailer']},
  {title:'Home & property',description:'Where you live and what you own',items:['Homeowners','Renters','Condo','Rental property','Mobile home','Flood','Valuables']},
  {title:'Family & future',description:'Liability and financial protection',items:['Life insurance','Disability income','Annuities','Personal umbrella']},
  {title:'Business & farm',description:'Protection for work and operations',items:['Business insurance','Commercial auto','Workers compensation','Farm','Bonds','Commercial umbrella']}
];

const sitemap = {
  'Insurance':['Vehicles','Home & property','Family & future','Business & farm'],
  'Manage my policy':['Billing & payments','Documents & ID cards','Policy changes','Online account','Road services'],
  'Claims & help':['Report a claim','Track a claim','Claim documents','What happens next','Emergency / storm help'],
  'Learn':['Coverage guides','Insurance basics','Discounts & savings','FAQs','Glossary']
};

let content = [];
let lastMenuTrigger = null;

const status = document.querySelector('#prototypeStatus');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function announce(message){
  status.textContent='';
  window.setTimeout(()=>{status.textContent=message},20);
}

function scrollToNode(node){
  node?.scrollIntoView({behavior:reducedMotion.matches?'auto':'smooth',block:'center'});
}

function prototypeDestination(label){
  announce(label + ' is represented in the information architecture but its destination page is outside this prototype scope.');
}

function buildMenu(key){
  return '<div class="mega-grid">' + menus[key].map(([title,items]) =>
    '<section class="mega-group"><h3>'+title+'</h3>'+items.map(item=>'<a href="#" data-prototype-link>'+item+'</a>').join('')+'</section>'
  ).join('') + '</div>';
}

function closeMenus(restoreFocus=false){
  document.querySelectorAll('.nav-trigger').forEach(btn=>btn.setAttribute('aria-expanded','false'));
  const mega=document.querySelector('#megaMenu');
  mega.hidden=true;
  mega.innerHTML='';
  if(restoreFocus && lastMenuTrigger) lastMenuTrigger.focus();
}

document.querySelectorAll('.nav-trigger').forEach(button=>{
  button.addEventListener('click',()=>{
    const mega=document.querySelector('#megaMenu');
    const open=button.getAttribute('aria-expanded')==='true';
    closeMenus();
    if(!open){
      lastMenuTrigger=button;
      button.setAttribute('aria-expanded','true');
      mega.innerHTML=buildMenu(button.dataset.menu);
      mega.hidden=false;
    }
  });
});

document.addEventListener('keydown',event=>{
  if(event.key==='Escape'){
    closeMenus(true);
    const mobileButton=document.querySelector('#mobileMenuButton');
    const mobileMenu=document.querySelector('#mobileMenu');
    if(mobileButton.getAttribute('aria-expanded')==='true'){
      mobileButton.setAttribute('aria-expanded','false');
      mobileMenu.hidden=true;
      mobileButton.focus();
    }
  }
});

document.querySelector('#productGroups').replaceChildren(...productGroups.map(group=>{
  const article=document.createElement('article');
  article.className='product-group';
  article.innerHTML='<h3>'+group.title+'</h3><p>'+group.description+'</p>'+group.items.map(item=>'<a href="#" data-prototype-link>'+item+'</a>').join('');
  return article;
}));

document.querySelector('#sitemap').replaceChildren(...Object.entries(sitemap).map(([title,items])=>{
  const article=document.createElement('article');
  article.className='sitemap-column';
  article.innerHTML='<h3>'+title+'</h3><ul>'+items.map(item=>'<li>'+item+'</li>').join('')+'</ul>';
  return article;
}));

function normalize(value){return value.toLowerCase().replace(/[^a-z0-9 ]/g,' ').replace(/\s+/g,' ').trim()}

const synonymMap = {
  'burst pipe':['water damage','homeowners','dwelling'],
  'pipe burst':['water damage','homeowners','dwelling'],
  'basement flood':['flood','water damage','homeowners'],
  'jewelry':['valuables','personal property','homeowners'],
  'ring':['valuables','personal property'],
  'dog bite':['personal liability','homeowners','liability'],
  'roadside':['roadside assistance','auto'],
  'tow':['roadside assistance','auto'],
  'id card':['proof of insurance','online account'],
  'proof insurance':['proof of insurance','online account'],
  'pay bill':['billing & payments','online account'],
  'rental car':['auto coverage','rental reimbursement'],
  'rent apartment':['renters','personal property'],
  'landlord':['rental property'],
  'umbrella':['personal umbrella','liability']
};

function score(item,query){
  const q=normalize(query);
  const hay=normalize([item.title,item.group,item.description,...(item.keywords||[])].join(' '));
  let terms=q.split(' ').filter(Boolean);
  Object.entries(synonymMap).forEach(([phrase,extras])=>{
    if(q.includes(phrase)) terms=[...terms,...extras.flatMap(x=>normalize(x).split(' '))];
  });
  return [...new Set(terms)].reduce((total,term)=>total+(hay.includes(term)?1:0),0);
}

function runSearch(query){
  const output=document.querySelector('#searchResults');
  if(!query.trim()){output.innerHTML='';return}
  const ranked=content.map(item=>({item,score:score(item,query)})).filter(x=>x.score>0).sort((a,b)=>b.score-a.score).slice(0,5);
  if(!ranked.length){
    output.innerHTML='<p class="no-results">No close match. Try a policy type, a service task, or a plain-language situation.</p>';
    announce('No close search matches found.');
    return;
  }
  output.replaceChildren(...ranked.map(({item})=>{
    const button=document.createElement('button');
    button.className='search-result';
    button.type='button';
    button.dataset.title=item.title;
    button.innerHTML='<strong>'+item.title+'</strong><span>'+item.group+' · '+item.description+'</span>';
    return button;
  }));
  announce(ranked.length + ' search results available.');
}

document.querySelector('#searchResults').addEventListener('click',event=>{
  const button=event.target.closest('.search-result');
  if(!button) return;
  if(button.dataset.title.toLowerCase().includes('homeowners')){
    scrollToNode(document.querySelector('#coverageDemo'));
    announce('Opened the Homeowners coverage example.');
  }else{
    prototypeDestination(button.dataset.title);
  }
});

document.querySelector('#searchButton').addEventListener('click',()=>runSearch(document.querySelector('#coverageSearch').value));
document.querySelector('#coverageSearch').addEventListener('keydown',e=>{if(e.key==='Enter')runSearch(e.currentTarget.value)});

document.querySelectorAll('.scenario-link').forEach(button=>button.addEventListener('click',()=>{
  const input=document.querySelector('#coverageSearch');
  input.value=button.dataset.query;
  runSearch(button.dataset.query);
  scrollToNode(input);
}));

document.querySelectorAll('[data-task]').forEach(button=>button.addEventListener('click',()=>{
  if(button.dataset.task==='agent'){
    scrollToNode(document.querySelector('#agent'));
    announce('Opened the human-help destination.');
    return;
  }
  const taskQueries={coverage:'coverage',claim:'claim',policy:'policy documents',quote:'insurance',discount:'discount'};
  const input=document.querySelector('#coverageSearch');
  input.value=taskQueries[button.dataset.task];
  runSearch(input.value);
  scrollToNode(input);
}));

const mobileButton=document.querySelector('#mobileMenuButton');
const mobileMenu=document.querySelector('#mobileMenu');
mobileButton.addEventListener('click',()=>{
  const open=mobileButton.getAttribute('aria-expanded')==='true';
  mobileButton.setAttribute('aria-expanded',String(!open));
  mobileMenu.hidden=open;
  if(!open){
    mobileMenu.innerHTML=Object.entries(menus).map(([key,groups])=>'<section><h3>'+key.replace(/^./,c=>c.toUpperCase())+'</h3>'+groups.flatMap(g=>g[1]).slice(0,8).map(i=>'<a href="#" data-prototype-link>'+i+'</a>').join('')+'</section>').join('');
  }
});

document.addEventListener('click',event=>{
  const link=event.target.closest('[data-prototype-link]');
  if(!link) return;
  event.preventDefault();
  prototypeDestination(link.textContent.trim());
});

document.querySelector('.sign-in').addEventListener('click',()=>prototypeDestination('Sign in'));
document.querySelector('[data-prototype-action="agent"]').addEventListener('click',()=>prototypeDestination('Agent locator'));

fetch('data/content.json')
  .then(response=>{
    if(!response.ok) throw new Error('Content index unavailable');
    return response.json();
  })
  .then(data=>{content=data})
  .catch(()=>{
    content=[];
    announce('The content index could not be loaded.');
  });
