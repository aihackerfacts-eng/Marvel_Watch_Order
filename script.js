/*
 * Marvel Watch Order
 * Images use TMDB image paths. Replace posterPath values with verified paths from
 * TMDB or another licensed image provider before public deployment.
 * Supabase cloud sync is optional; configure config.js and run schema.sql first.
 */
const releases = [
{id:"iron-man",title:"Iron Man",year:2008,type:"movie",phase:"Phase One",story:18,posterPath:"/78lPtwv72eTNqFW9COBYI0dWDJa.jpg"},
{id:"incredible-hulk",title:"The Incredible Hulk",year:2008,type:"movie",phase:"Phase One",story:19,posterPath:"/gKzYx79y0AQTL4UAk1cBQJ3nvrm.jpg"},
{id:"iron-man-2",title:"Iron Man 2",year:2010,type:"movie",phase:"Phase One",story:20,posterPath:"/6WBeq4fCfn7AN0o21W9qNcRF2l9.jpg"},
{id:"thor",title:"Thor",year:2011,type:"movie",phase:"Phase One",story:21,posterPath:"/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg"},
{id:"captain-america-first-avenger",title:"Captain America: The First Avenger",year:2011,type:"movie",phase:"Phase One",story:1,posterPath:"/vSNxAJTlD0r02V9sPYpOjqD用.jpg"},
{id:"avengers",title:"The Avengers",year:2012,type:"movie",phase:"Phase One",story:22,posterPath:"/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg"},
{id:"iron-man-3",title:"Iron Man 3",year:2013,type:"movie",phase:"Phase Two",story:23,posterPath:"/qhPtAc1TKbMPqNvcdXSOn9Bn7hZ.jpg"},
{id:"thor-dark-world",title:"Thor: The Dark World",year:2013,type:"movie",phase:"Phase Two",story:24,posterPath:"/wp6OxE4poJ4G7c0U2ZIXasTSMR7.jpg"},
{id:"captain-america-winter-soldier",title:"Captain America: The Winter Soldier",year:2014,type:"movie",phase:"Phase Two",story:25,posterPath:"/tVFRpFw3x Dib8rQ4Ygc2yQ7J4Z.jpg"},
{id:"guardians-galaxy",title:"Guardians of the Galaxy",year:2014,type:"movie",phase:"Phase Two",story:26,posterPath:"/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg"},
{id:"avengers-age-of-ultron",title:"Avengers: Age of Ultron",year:2015,type:"movie",phase:"Phase Two",story:27,posterPath:"/4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg"},
{id:"ant-man",title:"Ant-Man",year:2015,type:"movie",phase:"Phase Two",story:28,posterPath:"/r QRnQfUl3kfp78e9oWvYsKZzXh.jpg"},
{id:"captain-america-civil-war",title:"Captain America: Civil War",year:2016,type:"movie",phase:"Phase Three",story:29,posterPath:"/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg"},
{id:"doctor-strange",title:"Doctor Strange",year:2016,type:"movie",phase:"Phase Three",story:30,posterPath:"/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg"},
{id:"guardians-galaxy-2",title:"Guardians of the Galaxy Vol. 2",year:2017,type:"movie",phase:"Phase Three",story:31,posterPath:"/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg"},
{id:"spider-man-homecoming",title:"Spider-Man: Homecoming",year:2017,type:"movie",phase:"Phase Three",story:32,posterPath:"/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg"},
{id:"thor-ragnarok",title:"Thor: Ragnarok",year:2017,type:"movie",phase:"Phase Three",story:33,posterPath:"/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg"},
{id:"black-panther",title:"Black Panther",year:2018,type:"movie",phase:"Phase Three",story:34,posterPath:"/uxzzxijgPIY7slzFvMotPv8wjKA.jpg"},
{id:"avengers-infinity-war",title:"Avengers: Infinity War",year:2018,type:"movie",phase:"Phase Three",story:35,posterPath:"/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"},
{id:"ant-man-wasp",title:"Ant-Man and the Wasp",year:2018,type:"movie",phase:"Phase Three",story:36,posterPath:"/eivQmS3wqzqnQWILHLc4FsEfcXP.jpg"},
{id:"captain-marvel",title:"Captain Marvel",year:2019,type:"movie",phase:"Phase Three",story:7,posterPath:"/AtsgWhDnHTq68L0lLsUrCNnM7T.jpg"},
{id:"avengers-endgame",title:"Avengers: Endgame",year:2019,type:"movie",phase:"Phase Three",story:37,posterPath:"/or06FN3Dka5tukK1e9sl16pB3iy.jpg"},
{id:"spider-man-far-from-home",title:"Spider-Man: Far From Home",year:2019,type:"movie",phase:"Phase Three",story:38,posterPath:"/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg"},
{id:"wandavision",title:"WandaVision",year:2021,type:"series",phase:"Phase Four",story:39,posterPath:"/glKDfE6btIRcVB5zrjspRIs4r52.jpg",note:"Season 1"},
{id:"falcon-winter-soldier",title:"The Falcon and the Winter Soldier",year:2021,type:"series",phase:"Phase Four",story:40,posterPath:"/6kbAMLTe5ADnLUYUh8zB1BtzML.jpg"},
{id:"loki-s1",title:"Loki",year:2021,type:"series",phase:"Phase Four",story:41,posterPath:"/kEl2t3OhXc3Zb9FBh1AuYzRTgZp.jpg",note:"Season 1 · multiverse"},
{id:"black-widow",title:"Black Widow",year:2021,type:"movie",phase:"Phase Four",story:8,posterPath:"/qAZ0pVATRF9ZugfD6zz4bFRgKRY.jpg"},
{id:"what-if-s1",title:"What If...?",year:2021,type:"series",phase:"Phase Four",story:42,posterPath:"/lztz5XBMG1x6Y5ubz7CxfPFsAcW.jpg",note:"Animated · Season 1"},
{id:"shang-chi",title:"Shang-Chi and the Legend of the Ten Rings",year:2021,type:"movie",phase:"Phase Four",story:43,posterPath:"/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg"},
{id:"eternals",title:"Eternals",year:2021,type:"movie",phase:"Phase Four",story:44,posterPath:"/lFByFSLV5WDJEv3KabbdAF959F2.jpg"},
{id:"hawkeye",title:"Hawkeye",year:2021,type:"series",phase:"Phase Four",story:45,posterPath:"/pqzjCxPVc9TkVgGRWeAoMmyqkZV.jpg"},
{id:"spider-man-no-way-home",title:"Spider-Man: No Way Home",year:2021,type:"movie",phase:"Phase Four",story:46,posterPath:"/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"},
{id:"moon-knight",title:"Moon Knight",year:2022,type:"series",phase:"Phase Four",story:47,posterPath:"/YxZ6jKQ4o5xQZ9Y1w4V4Zx0Q.jpg"},
{id:"doctor-strange-multiverse",title:"Doctor Strange in the Multiverse of Madness",year:2022,type:"movie",phase:"Phase Four",story:48,posterPath:"/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg"},
{id:"ms-marvel",title:"Ms. Marvel",year:2022,type:"series",phase:"Phase Four",story:49,posterPath:"/xQW2w9A4V3JvZ8eQX5F4vJw.jpg"},
{id:"thor-love-thunder",title:"Thor: Love and Thunder",year:2022,type:"movie",phase:"Phase Four",story:50,posterPath:"/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg"},
{id:"i-am-groot",title:"I Am Groot",year:2022,type:"series",phase:"Phase Four",story:51,posterPath:"/r1hW5yW1q4pW5F2qZ2j2s2j.jpg",note:"Animated shorts"},
{id:"she-hulk",title:"She-Hulk: Attorney at Law",year:2022,type:"series",phase:"Phase Four",story:52,posterPath:"/hJfI6AGrmr4uSHRccfJuSsapv0E.jpg"},
{id:"werewolf-by-night",title:"Werewolf by Night",year:2022,type:"special",phase:"Phase Four",story:53,posterPath:"/jMV9R6n7f3s7Y2z4b4v4q.jpg"},
{id:"black-panther-wakanda-forever",title:"Black Panther: Wakanda Forever",year:2022,type:"movie",phase:"Phase Four",story:54,posterPath:"/sv1xJUazXeYqALzczSZ3O6nkH75.jpg"},
{id:"guardians-holiday-special",title:"The Guardians of the Galaxy Holiday Special",year:2022,type:"special",phase:"Phase Four",story:55,posterPath:"/8dqXyslZ2hv49Oiob9UjlGSHSTR.jpg"},
{id:"ant-man-quantumania",title:"Ant-Man and the Wasp: Quantumania",year:2023,type:"movie",phase:"Phase Five",story:56,posterPath:"/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg"},
{id:"guardians-galaxy-3",title:"Guardians of the Galaxy Vol. 3",year:2023,type:"movie",phase:"Phase Five",story:57,posterPath:"/r2J02Z2OpNTctfOSN1Ydgii81M.jpg"},
{id:"secret-invasion",title:"Secret Invasion",year:2023,type:"series",phase:"Phase Five",story:58,posterPath:"/f5ZMzz3DHg7EV5J2Kp9W2d7x6g.jpg"},
{id:"loki-s2",title:"Loki",year:2023,type:"series",phase:"Phase Five",story:59,posterPath:"/voHUunnut9v6VqgX2f3V5bY.jpg",note:"Season 2"},
{id:"the-marvels",title:"The Marvels",year:2023,type:"movie",phase:"Phase Five",story:60,posterPath:"/9GBhuX9dD4xM5xR4Q9K4e2Z.jpg"},
{id:"what-if-s2",title:"What If...?",year:2023,type:"series",phase:"Phase Five",story:61,posterPath:"/lztz5XBMG1x6Y5ubz7CxfPFsAcW.jpg",note:"Animated · Season 2"},
{id:"echo",title:"Echo",year:2024,type:"series",phase:"Phase Five",story:62,posterPath:"/2e6f8bVx9s2t0u5K3d.jpg"},
{id:"x-men-97",title:"X-Men '97",year:2024,type:"series",phase:"Multiverse",story:63,posterPath:"/9Ycz7y4Z4Q3z0w1Y7t.jpg",note:"Animated"},
{id:"deadpool-wolverine",title:"Deadpool & Wolverine",year:2024,type:"movie",phase:"Multiverse",story:64,posterPath:"/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg"},
{id:"agatha-all-along",title:"Agatha All Along",year:2024,type:"series",phase:"Phase Five",story:65,posterPath:"/m5S5zZ2x3c.jpg"},
{id:"your-friendly-neighborhood-spider-man",title:"Your Friendly Neighborhood Spider-Man",year:2025,type:"series",phase:"Multiverse",story:66,posterPath:"",note:"Animated"},
{id:"captain-america-brave-new-world",title:"Captain America: Brave New World",year:2025,type:"movie",phase:"Phase Five",story:67,posterPath:"/pzIddUEMWhWzfvLI3TwxUG2wGoi.jpg"},
{id:"daredevil-born-again-s1",title:"Daredevil: Born Again",year:2025,type:"series",phase:"Phase Five",story:68,posterPath:"",note:"Season 1"},
{id:"thunderbolts",title:"Thunderbolts*",year:2025,type:"movie",phase:"Phase Five",story:69,posterPath:"/hU0e7X8k3V.jpg"},
{id:"ironheart",title:"Ironheart",year:2025,type:"series",phase:"Phase Five",story:70,posterPath:"",note:"Season 1"},
{id:"fantastic-four-first-steps",title:"The Fantastic Four: First Steps",year:2025,type:"movie",phase:"Multiverse",story:4,posterPath:"",note:"Alternate-universe setting"},
{id:"eyes-of-wakanda",title:"Eyes of Wakanda",year:2025,type:"series",phase:"Phase Six",story:2,posterPath:"",note:"Animated anthology"},
{id:"marvel-zombies",title:"Marvel Zombies",year:2025,type:"series",phase:"Multiverse",story:71,posterPath:"",note:"Animated"},
{id:"wonder-man",title:"Wonder Man",year:2026,type:"series",phase:"Phase Six",story:72,posterPath:"",note:"Verify current release status"},
{id:"daredevil-born-again-s2",title:"Daredevil: Born Again",year:2026,type:"series",phase:"Phase Six",story:73,posterPath:"",note:"Season 2 · verify current release status"},
{id:"punisher-one-last-kill",title:"The Punisher: One Last Kill",year:2026,type:"special",phase:"Phase Six",story:74,posterPath:"",note:"Verify current release status"},
{id:"spider-man-brand-new-day",title:"Spider-Man: Brand New Day",year:2026,type:"movie",phase:"Phase Six",story:75,posterPath:"",upcoming:true},
{id:"visionquest",title:"VisionQuest",year:2026,type:"series",phase:"Phase Six",story:76,posterPath:"",upcoming:true},
{id:"avengers-doomsday",title:"Avengers: Doomsday",year:2026,type:"movie",phase:"Phase Six",story:77,posterPath:"",upcoming:true},
{id:"avengers-secret-wars",title:"Avengers: Secret Wars",year:2027,type:"movie",phase:"Phase Six",story:78,posterPath:"",upcoming:true}
];

const CONFIG = window.MARVEL_CONFIG || {};
const TMDB_BASE = CONFIG.tmdbImageBase || "https://image.tmdb.org/t/p/w342";
const timeline = document.getElementById("timeline-list");
const search = document.getElementById("search");
const yearFilter = document.getElementById("year-filter");
const statusFilter = document.getElementById("status-filter");
const emptyState = document.getElementById("empty-state");
let activeType = "all", activeOrder = "release", authMode = "login", supabaseClient = null, currentUser = null;
const watched = new Set(JSON.parse(localStorage.getItem("marvelWatched") || "[]"));

function posterURL(path){return path && !/[用用用用用用用用]/.test(path) ? TMDB_BASE+path : "";}
function initSupabase(){
  if(CONFIG.supabaseUrl && CONFIG.supabaseAnonKey && window.supabase?.createClient){
    supabaseClient = window.supabase.createClient(CONFIG.supabaseUrl, CONFIG.supabaseAnonKey);
    supabaseClient.auth.onAuthStateChange((_event,session)=>{currentUser=session?.user||null;updateAuthUI();if(currentUser)loadCloudProgress();});
    supabaseClient.auth.getSession().then(({data})=>{currentUser=data.session?.user||null;updateAuthUI();if(currentUser)loadCloudProgress();});
  }
}
function updateStats(){
  document.getElementById("total-count").textContent = releases.length;
  document.getElementById("movie-count").textContent = releases.filter(r=>r.type==="movie").length;
  document.getElementById("series-count").textContent = releases.filter(r=>r.type!=="movie").length;
}
function message(text){document.getElementById("auth-message").textContent=text;}
function updateAuthUI(){
  document.getElementById("auth-button").textContent=currentUser?"Account":"Sign in";
  document.getElementById("signout-button").hidden=!currentUser;
  document.getElementById("sync-label").textContent=currentUser?"Cloud sync enabled":"Progress saved on this device";
  if(currentUser) message(`Signed in as ${currentUser.email}. Progress syncs to your account.`);
}
async function loadCloudProgress(){
  if(!supabaseClient||!currentUser)return;
  const {data,error}=await supabaseClient.from("watch_progress").select("title_id,watched").eq("user_id",currentUser.id);
  if(error){message("Could not load cloud progress. Check schema.sql and Supabase table permissions.");return;}
  watched.clear();(data||[]).forEach(row=>{if(row.watched)watched.add(row.title_id);});
  localStorage.setItem("marvelWatched",JSON.stringify([...watched]));render();
}
async function saveProgress(id,isWatched){
  if(isWatched)watched.add(id);else watched.delete(id);
  localStorage.setItem("marvelWatched",JSON.stringify([...watched]));render();
  if(supabaseClient&&currentUser){
    const payload={user_id:currentUser.id,title_id:id,watched:isWatched,updated_at:new Date().toISOString()};
    const {error}=await supabaseClient.from("watch_progress").upsert(payload,{onConflict:"user_id,title_id"});
    if(error)message("Saved locally, but cloud sync failed. Check Supabase table/RLS settings.");
  }
}
function render(){
  const q=search.value.trim().toLowerCase(), year=yearFilter.value, status=statusFilter.value;
  let items=releases.map((r,index)=>({...r,index})).filter(r=>{
    const matchType=activeType==="all"||r.type===activeType;
    const matchYear=year==="all"||String(r.year)===year;
    const matchQuery=!q||`${r.title} ${r.year} ${r.phase} ${r.note||""} ${r.type}`.toLowerCase().includes(q);
    const isWatched=watched.has(r.id);
    const matchStatus=status==="all"||(status==="watched"&&isWatched)||(status==="unwatched"&&!isWatched);
    return matchType&&matchYear&&matchQuery&&matchStatus;
  });
  items.sort((a,b)=>activeOrder==="release"?(a.year-b.year||a.index-b.index):(a.story-b.story||a.year-b.year));
  timeline.innerHTML="";
  items.forEach(item=>{
    const card=document.createElement("article");card.className=`release-card ${watched.has(item.id)?"watched":""}`;
    const typeLabel=item.type==="movie"?"Movie":item.type==="series"?"Series":"Special";
    const tagClass=item.type==="movie"?"":item.type==="series"?"series-tag":"special-tag";
    const url=posterURL(item.posterPath);
    const poster=url?`<img class="poster" src="${url}" alt="" loading="lazy" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'poster poster-fallback',textContent:'M'}))">`:`<div class="poster poster-fallback" aria-hidden="true">${item.type==="series"?"TV":item.type==="special"?"✦":"M"}</div>`;
    card.innerHTML=`${poster}<div class="card-body"><div class="card-top"><span class="year">${item.year}</span><span class="tag ${tagClass}">${typeLabel}</span>${item.upcoming?'<span class="tag upcoming">Upcoming / verify</span>':""}</div><h3 class="card-title"></h3><div class="card-meta">${item.note?`${item.note} · `:""}${item.phase}${activeOrder==="story"?` · Story position ${item.story}`:""}</div><div class="card-bottom"><span class="phase">${watched.has(item.id)?"✓ WATCHED":activeOrder==="story"?"STORY ORDER":"RELEASE ORDER"}</span><button class="watched-toggle" type="button">${watched.has(item.id)?"Watched ✓":"Mark watched"}</button></div></div>`;
    card.querySelector(".card-title").textContent=item.title;
    card.querySelector(".watched-toggle").addEventListener("click",()=>saveProgress(item.id,!watched.has(item.id)));
    timeline.appendChild(card);
  });
  emptyState.hidden=items.length>0;
  document.getElementById("results-label").textContent=`${items.length} ${items.length===1?"TITLE":"TITLES"} · ${activeOrder==="release"?"RELEASE ORDER":"APPROXIMATE STORY ORDER"}`;
}
document.querySelectorAll(".order-button").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll(".order-button").forEach(x=>x.classList.toggle("active",x===b));activeOrder=b.dataset.order;render();}));
document.querySelectorAll(".type-button").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll(".type-button").forEach(x=>x.classList.toggle("active",x===b));activeType=b.dataset.type;render();}));
search.addEventListener("input",render);yearFilter.addEventListener("change",render);statusFilter.addEventListener("change",render);
document.getElementById("reset-filters").addEventListener("click",()=>{search.value="";yearFilter.value="all";statusFilter.value="all";activeType="all";document.querySelectorAll(".type-button").forEach(b=>b.classList.toggle("active",b.dataset.type==="all"));render();});
document.getElementById("menu-toggle").addEventListener("click",()=>{const nav=document.getElementById("main-nav"),open=nav.classList.toggle("open");document.getElementById("menu-toggle").setAttribute("aria-expanded",String(open));});
document.querySelectorAll(".main-nav a").forEach(a=>a.addEventListener("click",()=>document.getElementById("main-nav").classList.remove("open")));
document.getElementById("auth-button").addEventListener("click",()=>document.getElementById("account").scrollIntoView({behavior:"smooth"}));
document.querySelectorAll(".auth-tab").forEach(b=>b.addEventListener("click",()=>{authMode=b.dataset.auth;document.querySelectorAll(".auth-tab").forEach(x=>x.classList.toggle("active",x===b));document.getElementById("auth-submit").textContent=authMode==="login"?"Sign in":"Create account";document.getElementById("password").autocomplete=authMode==="login"?"current-password":"new-password";message(supabaseClient?"Enter your email and password.":"Set up Supabase in config.js to enable cloud sync.");}));
document.getElementById("auth-form").addEventListener("submit",async e=>{
  e.preventDefault();
  if(!supabaseClient){message("Cloud accounts are not configured yet. Follow README.md to create a Supabase project and edit config.js.");return;}
  const email=document.getElementById("email").value,password=document.getElementById("password").value;
  const result=authMode==="signup"?await supabaseClient.auth.signUp({email,password}):await supabaseClient.auth.signInWithPassword({email,password});
  if(result.error){message(result.error.message);return;}
  if(authMode==="signup"&&!result.data.session){message("Account created. Check your email to confirm, then sign in.");return;}
  currentUser=result.data.user;updateAuthUI();await loadCloudProgress();
});
document.getElementById("signout-button").addEventListener("click",async()=>{if(supabaseClient)await supabaseClient.auth.signOut();currentUser=null;updateAuthUI();message("Signed out. Your current browser still has its last local copy of progress.");});
[...new Set(releases.map(r=>r.year))].sort((a,b)=>a-b).forEach(year=>{const o=document.createElement("option");o.value=String(year);o.textContent=String(year);yearFilter.appendChild(o);});
updateStats();render();initSupabase();
