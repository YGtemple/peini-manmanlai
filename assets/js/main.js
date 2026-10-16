/* ============================================================
   共享脚本 main.js
   - 导航当前页高亮
   - 全站金句数据池 window.QUOTES（逐条照录《02_金句文案素材库》）
   - 首页「今日一句」轮换
   - 复制降级 + toast
   纯原生，非 module，file:// 可用
   ============================================================ */

/* ---------- 全站金句数据池 ---------- */
/* tag: 自律与专注 / 习惯与坚持 / 心态与反内耗 / 成长与翻盘 / 行动与当下
   hook: 开场钩子精选   close: 收尾升华精选 */
window.QUOTES = [
  /* 一、自律与专注 */
  {cn:"自律的痛苦轻如鸿毛，后悔的痛苦重如泰山。", src:"抖音·阿锦", url:"https://m.baike.com/wiki/%E9%98%BF%E9%94%A6/7481013966819672100", tag:"自律与专注", hook:true},
  {cn:"自律的苦其实是成本最低的，只发生在你拒绝诱惑、专心干活的前十分钟。", src:"抖音", url:"https://www.iesdouyin.com/share/video/7670226960908554170", tag:"自律与专注"},
  {cn:"所有优秀的背后，都是苦行僧般的自律。（摘《人民日报》）", src:"抖音", url:"https://www.iesdouyin.com/share/video/7669190963327154378", tag:"自律与专注"},
  {cn:"真正能让你走远的，从来不是天赋与人脉，而是积极自律与勤奋。", src:"抖音", url:"https://www.iesdouyin.com/share/video/7667906863657514418", tag:"自律与专注"},
  {cn:"管住自己，才能拥有想要的生活；越自律的人，人生选择权越多。", src:"抖音", url:"https://www.iesdouyin.com/share/video/7663072075968838053", tag:"自律与专注"},
  {cn:"一个人不可能天生优秀，但可以通过自律塑造自己。（摘《人民日报》）", src:"微博·@金句正能量", url:"https://m.weibo.cn/detail/5262139969504340", tag:"自律与专注"},
  {cn:"自律和不自律都会吃苦，不同的是，自律的苦会让人生越来越甜。", src:"微博·新浪新闻语录合集", url:"https://www.sina.cn/news/detail/5279639049080644.html", tag:"自律与专注"},
  {cn:"真正的自律，不是叫醒你的闹钟，是你心中的梦想。", src:"微信公众号·人民日报夜读", url:"https://www.peopleapp.com/column/30038518554-500003530681", tag:"自律与专注", close:true},
  {cn:"养成专注力就像锻炼肌肉，需要持续练习、循序渐进。", src:"B站", url:"https://www.bilibili.com/video/BV1usLKzsEqb/", tag:"自律与专注"},
  {en:"Discipline equals freedom.", cn:"纪律即自由。", src:"YouTube/X·Jocko Willink", url:"https://www.antoinebuteau.com/lessons-from-jocko-willink/", tag:"自律与专注", hook:true},
  {en:"Don't count on motivation. Count on discipline.", cn:"别靠动力，靠纪律。", src:"YouTube·Jocko Willink", url:"https://usenoro.com/routines/jocko-willink/", tag:"自律与专注", hook:true},
  {en:"Discipline outlives motivation.", cn:"纪律比动力更长久。", src:"TikTok/Instagram 励志语录", url:"https://reelquote.app/en/blog/motivational-quote-backgrounds-download/", tag:"自律与专注"},
  {en:"Stay hard.", cn:"保持强硬／别变软。", src:"X·David Goggins", url:"https://www.developgoodhabits.com/david-goggins-quotes/", tag:"自律与专注", hook:true},
  {en:"Screw Motivation, what you need is Self Discipline!", cn:"去他的动机，你需要的是自律！", src:"Reddit", url:"https://woid.io/reddit/2018/01/?page=999", tag:"自律与专注", hook:true},

  /* 二、习惯与坚持 */
  {cn:"真正拉开人与人差距的，从来不是天赋，而是日复一日的习惯。", src:"抖音", url:"https://www.iesdouyin.com/share/video/7691065593717991077", tag:"习惯与坚持"},
  {cn:"早起：5 点起床，5 年多出 3000 小时，够从废物变高手。", src:"抖音", url:"https://www.iesdouyin.com/share/video/7634398270949428342", tag:"习惯与坚持"},
  {cn:"先开始，再完美：坚持的核心不是每天做多少，而是每天都在做。哪怕只行动 10 分钟，也比空想一整天有用。", src:"微博·@千万正能量", url:"https://m.weibo.cn/detail/5347114482926184", tag:"习惯与坚持"},
  {cn:"自律三个月，你会亲手把自己活成另外一个人。", src:"微博·@青年励志语录", url:"https://m.weibo.cn/detail/5287584805948358", tag:"习惯与坚持", close:true},
  {cn:"顶级的自律从来不是一时的情绪沸腾，而是日复一日的温和坚持。", src:"微信公众号爆文转载", url:"http://m.toutiao.com/group/7686627564281954860/", tag:"习惯与坚持", close:true},
  {cn:"耐心虽苦，成果却甜。明天的太阳永远为勤劳的人升起。", src:"B站·百大 UP 劝学混剪", url:"https://www.bilibili.com/video/BV1fi4y1g7Rn/", tag:"习惯与坚持"},
  {cn:"人得学会在没有反馈的日子里持续做正确的事。", src:"知乎", url:"https://www.zhihu.com/question/599006651/answer/2016829443356770860", tag:"习惯与坚持", close:true},
  {cn:"既不是天赋也不是努力，而是日积月累的习惯霸权。", src:"知乎高赞观点（被抖音教学号拆解）", url:"https://www.iesdouyin.com/share/video/7663142583492726057", tag:"习惯与坚持"},
  {cn:"真正的复盘不需要写长篇日记，每天花几分钟简单回顾今天。", src:"知乎万赞长文（转载）", url:"https://www.iesdouyin.com/share/video/7679672664415472238", tag:"习惯与坚持"},
  {cn:"每天八小时！！！一生做学霸！！！", src:"豆瓣小组「每天学习八小时」slogan", url:"", tag:"习惯与坚持"},
  {en:"Consistency Is the Real Superpower.", cn:"一致性才是真正的超能力。", src:"Reddit·r/WellDisciplined", url:"https://reddlx.com/sub/WellDisciplined", tag:"习惯与坚持", hook:true},
  {en:"Winning is built in boring routines.", cn:"胜利建立在枯燥的例行公事上。", src:"Instagram captions", url:"https://captionspots.com/stroke-buddy-captions/", tag:"习惯与坚持"},
  {en:"Success starts with what you repeat daily.", cn:"成功始于你每天重复做的事。", src:"Instagram captions", url:"https://captionspots.com/stroke-buddy-captions/", tag:"习惯与坚持"},
  {en:"Progress is built in silence.", cn:"进步在沉默中建成。", src:"Instagram", url:"https://captrilo.com/black-white-captions-instagram/", tag:"习惯与坚持"},
  {en:"Your reps in silence are your reps that count.", cn:"你默默流下的汗才算数。", src:"TikTok 金句模板", url:"https://reelquote.app/en/blog/motivational-quote-backgrounds-download/", tag:"习惯与坚持"},
  {en:"The plan is not the work. The work is the work.", cn:"计划不是干活，干活才是干活。", src:"Instagram 语录", url:"https://reelquote.app/en/blog/motivational-quote-backgrounds-download/", tag:"习惯与坚持"},
  {en:"Never miss twice. Missing one day means nothing; the only failure is not starting again.", cn:"别连漏两天。漏一天不算什么，唯一的失败是不再重来。", src:"Reddit/Quora 自律问答高频共识", url:"https://infinitefits.blog/how-to-build-self-discipline/", tag:"习惯与坚持"},
  {en:"If you want to get better at anything, do it for 30 minutes per day for 30 straight days.", cn:"想把任何事变强：每天 30 分钟，连续 30 天。", src:"Quora 自助洞察合集 PDF", url:"https://uploads-ssl.webflow.com/61a51f6d0f790c4eca5d8b97/64da9140624b34e8e58232b1_the-most-powerful-life-hacks%20(1)-1.pdf", tag:"习惯与坚持"},
  {en:"Momentum beats motivation every time.", cn:"势头永远赢过鸡血。", src:"X·Paul @EliteIncome_", url:"https://xholic.ai/best-tweets-about-self-improvement/", tag:"习惯与坚持"},

  /* 三、心态与反内耗 */
  {cn:"把『他是不是针对我』改成『这件事有几种可能性』。", src:"小红书（玻璃心自救）", url:"https://www.360kuai.com/mob/transcoding?check=53aec204272ba5b2&url=http%3A%2F%2Fzm.news.so.com%2F3409a5cdaa6c99b1069f4778cc853384", tag:"心态与反内耗"},
  {cn:"我们九成的痛苦都源于对他人的过度关注。", src:"小红书成长向（引自瓦尔）", url:"https://www.iesdouyin.com/share/video/7657857817738674873", tag:"心态与反内耗", close:true},
  {cn:"你的注意力像洒在地上的米，被四面八方的人捡拾干净，留给自己的空空如也。", src:"小红书成长向", url:"https://www.iesdouyin.com/share/video/7657857817738674873", tag:"心态与反内耗"},
  {cn:"情绪是耗电的，成事是充电的；干活的时候心情自然就好了。", src:"小红书女性成长向", url:"https://www.iesdouyin.com/share/video/7682624395306601766", tag:"心态与反内耗"},
  {cn:"抗挫力的核心不是你多能忍，而是你能不能在被否定时依然保有判断力。", src:"小红书（女生内核稳定向）", url:"https://www.iesdouyin.com/share/video/7663273632870079205", tag:"心态与反内耗"},
  {cn:"戒掉『玻璃心』：别总觉得别人在关注自己，减少敏感和自我内耗，把精力放在做好自己上。", src:"微博·@千万正能量", url:"https://m.weibo.cn/detail/5347114482926184", tag:"心态与反内耗"},
  {cn:"人生 5 贵：健康的身体、自洽的内心、稳定的情绪、翻篇的能力、对明天的热情。", src:"人民论坛/人民日报系夜读", url:"http://theory.people.com.cn/n1/2026/0322/c40531-40686388.html", tag:"心态与反内耗", close:true},
  {cn:"允许一切发生，允许自己慢慢来。", src:"微信公众号·人民日报夜读", url:"https://www.iesdouyin.com/share/video/7666576634123957861", tag:"心态与反内耗", close:true},
  {cn:"那些打不倒我们的，会使我们更强大。", src:"微信公众号·人民日报夜读（李思圆）", url:"https://www.ximalaya.com/creation/56880239", tag:"心态与反内耗"},
  {cn:"你越逃避什么，什么就越控制你；你越敢面对什么，什么就越不再可怕。", src:"知乎高赞习惯清单（转载）", url:"https://www.iesdouyin.com/share/video/7662968929198951718", tag:"心态与反内耗"},
  {cn:"精神状态和自我效能感高度相关……你太久没有赢过了。", src:"抖音·小赢治愈内耗", url:"https://www.iesdouyin.com/share/video/7675498302268681979", tag:"心态与反内耗", hook:true},
  {cn:"其实我知道没有意义，但就是不想按照理想的状态生活。", src:"豆瓣自律小组打卡帖（澎湃引用）", url:"https://m.thepaper.cn/wifiKey_detail.jsp?contid=10521695", tag:"心态与反内耗"},
  {cn:"生命链接不必过深，要直面告别与恐惧。", src:"快手·大冰开导老铁", url:"http://news.qq.com/rain/a/20260214A05KMG00", tag:"心态与反内耗"},
  {en:"What has transformed is I no longer judge myself for what I see in myself from moment to moment.", cn:"真正改变我的，是我不再时时刻刻评判自己。", src:"Quora 精选合集", url:"https://www.appliedwisdom.com/quora-posts", tag:"心态与反内耗", close:true},
  {en:"We don't lack motivation, we lack the courage to stop hiding.", cn:"我们缺的不是动机，而是停止逃避的勇气。", src:"Reddit·u/smartscroller", url:"https://reddlx.com/author/smartscroller", tag:"心态与反内耗"},

  /* 四、成长与翻盘 */
  {cn:"人生最好的贵人就是努力向上的自己。", src:"微博·@认知提升", url:"https://m.weibo.cn/detail/5297025790512384", tag:"成长与翻盘"},
  {cn:"最完美的状态，不是你从不失误，而是你从没放弃成长。", src:"微博·@认知提升", url:"https://m.weibo.cn/detail/5297025790512384", tag:"成长与翻盘"},
  {cn:"想要翻盘只需要三件事：早睡、运动、读书。", src:"小红书成长向", url:"https://www.iesdouyin.com/share/video/7657857817738674873", tag:"成长与翻盘"},
  {cn:"认定了就要全身心投入，爱到热血沸腾，为之奉献所有。", src:"快手·搬砖小伟", url:"https://m.cyol.com/gb/hdzt/articles/2021-06/09/content_OaWgbCa7b.html", tag:"成长与翻盘"},
  {cn:"过去那个自卑敏感的我，没想到今天能成为一个拥有 127 万粉丝的快手创作者。", src:"快手·西北刀客-吴志强", url:"http://tech.cnr.cn/techph/20251031/t20251031_527414750.shtml", tag:"成长与翻盘"},
  {cn:"如果不跑步，我就好像不是我自己。", src:"快手·房博", url:"https://view.inews.qq.com/a/20251130A043GW00", tag:"成长与翻盘"},
  {cn:"他们试图把你埋了，但你要记得你是种子。", src:"B站·蛋挞Bottle", url:"https://space.bilibili.com/526149759", tag:"成长与翻盘", hook:true},
  {cn:"人所有的拖沓都代表他并非真正热爱。", src:"B站·蛋挞Bottle", url:"https://space.bilibili.com/526149759", tag:"成长与翻盘"},
  {cn:"父母塑造我肉身，热爱塑造我灵魂。", src:"小宇宙·《深想事成》回响 01", url:"https://www.xiaoyuzhoufm.com/podcast/6542676e59c9fcf340a6bc6c", tag:"成长与翻盘", close:true},
  {cn:"人生支点越多，内核越稳。", src:"小宇宙·《自我进化论》传播语", url:"https://www.iesdouyin.com/share/video/7636729965412980479", tag:"成长与翻盘"},
  {cn:"将自己视为个人公司去经营。", src:"小宇宙·《可能性褶皱 Possibility》嘉宾观点", url:"https://www.iesdouyin.com/share/video/7602084977203984851", tag:"成长与翻盘"},
  {cn:"很多时候我们说不知道要什么，其实是不敢承认自己要什么。", src:"小宇宙·《史蒂夫说》463 期", url:"https://www.iesdouyin.com/share/video/7663512159956042099", tag:"成长与翻盘"},
  {cn:"未来无人知晓，但我愿意放手，愿意纵身一跃……最终我允许万事万物穿过自己。", src:"小宇宙·《无人知晓》E10", url:"https://www.xiaoyuzhoufm.com/episode/61ee26c84675a08411f51570", tag:"成长与翻盘", close:true},
  {en:"When you think that you are done, you're only 40% in to what your body is capable of doing.", cn:"当你觉得自己撑不住时，其实你只用到了身体潜能的 40%。", src:"YouTube·David Goggins（40% Rule）", url:"https://stairway.highexistence.com/cant-hurt-me-by-david-goggins/", tag:"成长与翻盘", hook:true},
  {en:"You have to build calluses on your brain just like how you build calluses on your hands.", cn:"要像手掌长茧一样，让大脑也长出厚茧。", src:"YouTube·David Goggins", url:"https://kreativitet-skoenhet.com/dtnfd/david-goggins-san-diego-one-day", tag:"成长与翻盘"},
  {en:"Don't stop when you're tired. Stop when you're done.", cn:"累了别停，做完了才停。", src:"YouTube/X·David Goggins", url:"https://vyaktigatvikas.com/chat/david-goggins-chat", tag:"成长与翻盘", hook:true},
  {en:"Build the version of you that embarrasses yesterday.", cn:"长成让昨天的自己自惭形秽的版本。", src:"TikTok/Instagram 金句模板", url:"https://reelquote.app/en/blog/motivational-quote-backgrounds-download/", tag:"成长与翻盘", hook:true},
  {en:"Nobody saw the three years before the overnight.", cn:"没人看见你「一夜成名」前的三年。", src:"TikTok/Instagram 语录背景", url:"https://reelquote.app/en/blog/motivational-quote-backgrounds-download/", tag:"成长与翻盘", close:true},
  {en:"Behavior follows identity. Not the other way around.", cn:"行为追随身份，而非相反。", src:"X·James Peters @JamesCPeters", url:"https://xholic.ai/best-tweets-about-self-improvement/", tag:"成长与翻盘"},
  {en:"People don't have the patience to dedicate 3 years to building their own business, but they have the patience to work for others for 40 years.", cn:"人们没耐心花 3 年创业，却有耐心给别人打工 40 年。", src:"Reddit·u/Suspicious-Cup8556", url:"https://reddlx.com/sub/WellDisciplined", tag:"成长与翻盘"},
  {en:"Real adulthood is the result of two qualities: self-discipline and self-reliance.", cn:"真正的成熟，来自自律与自立这两种品质。", src:"Quora（JW Jepson，经 Tumblr 收录）", url:"https://www.tumblr.com/rforrahmalia-blog", tag:"成长与翻盘"},

  /* 五、行动与当下 */
  {cn:"执行力，就是跳过情绪，直接做事。", src:"微博·川观新闻夜读", url:"https://cbgc.scol.com.cn/news/7431789", tag:"行动与当下", hook:true},
  {cn:"你只管努力，剩下的交给时间。", src:"微博·川观新闻夜读", url:"https://cbgc.scol.com.cn/news/7431789", tag:"行动与当下"},
  {cn:"如果没有天赋，那就一直重复。", src:"微博·川观新闻夜读", url:"https://cbgc.scol.com.cn/news/7431789", tag:"行动与当下"},
  {cn:"8 周结构化冥想能使前额叶皮层增厚 30%，压力水平降低 55%。", src:"B站·《改变人生的 20 个习惯》", url:"https://www.bilibili.com/video/BV1Zb7kz5ErR/", tag:"行动与当下"},
  {cn:"因为孤独，所以想要阅读……", src:"豆瓣「每天提前读书」小组文化描述", url:"https://epaper.qlwb.com.cn/qlwb/PDF/20181103/B08.pdf", tag:"行动与当下"},
  {cn:"「坚持好难」——放弃一个 flag 平均需要 6 天。", src:"澎湃美数课基于豆瓣打卡帖统计", url:"https://m.thepaper.cn/wifiKey_detail.jsp?contid=10521695", tag:"行动与当下"},
  {en:"Wealth is assets that earn while you sleep.", cn:"财富，是你睡觉时仍在为你赚钱的资产。", src:"X·Naval Ravikant", url:"https://nav.al/how-to-get-rich", tag:"行动与当下"},
  {en:"Meditation is intermittent fasting for the mind.", cn:"冥想，就是给大脑做的间歇性断食。", src:"X·Naval Ravikant", url:"https://moneymasterpiece.com/the-almanack-of-naval-ravikant/", tag:"行动与当下"},
  {en:"Sleeping in, saying no, doing nothing — all strategic.", cn:"睡懒觉、说不、什么都不做——都是策略。", src:"TikTok 内容趋势", url:"https://flowshorts.app/tiktok-ideas/motivation", tag:"行动与当下"},
  {en:"I got up. Brushed my teeth. Answered the emails. Ate something.", cn:"我起了床。刷了牙。回了邮件。吃了点东西。", src:"Reddit·r/gratitude（归档）", url:"https://gratitude.city/gratitude/gratitude-practice_grateful-for-the-day-i-didnt-give-up-even-though-no-one-saw-it-via-r-gratitude_autobob-_-2025-07-24/", tag:"行动与当下", hook:true, close:true}
];

/* ---------- 导航高亮 ---------- */
(function () {
  var page = (location.pathname.split('/').pop() || 'index.html');
  document.querySelectorAll('.nav a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === page) a.classList.add('active');
  });
})();

/* ---------- toast ---------- */
function showToast(msg) {
  var t = document.querySelector('.toast');
  if (!t) {
    t = document.createElement('div');
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(function () { t.classList.remove('show'); }, 1800);
}

/* ---------- 复制（含降级） ---------- */
function copyText(text, btn) {
  function done() { showToast('已复制，可直接粘贴'); }
  function fallback() {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); done(); }
    catch (e) { showToast('复制失败，请手动选中文本'); }
    document.body.removeChild(ta);
  }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(done).catch(fallback);
  } else {
    fallback();
  }
}

/* ---------- 首页「今日一句」 ---------- */
(function () {
  var box = document.getElementById('todayQuote');
  if (!box) return;
  var pool = window.QUOTES;
  var idx = Math.floor(Math.random() * pool.length);
  var body = box.querySelector('.tq-body');
  var src = box.querySelector('.tq-src');

  function render() {
    var q = pool[idx];
    var html = '';
    if (q.en) html += '<div class="serif" style="font-size:15px;color:#9a8c7c;margin-bottom:6px;font-style:italic;">' + q.en + '</div>';
    html += '「' + q.cn + '」';
    body.innerHTML = html;
    src.textContent = '—— ' + q.src;
    src.href = q.url || '#';
    src.style.display = q.url ? '' : 'none';
  }
  render();
  var btn = document.getElementById('nextQuote');
  if (btn) {
    btn.addEventListener('click', function () {
      var n;
      do { n = Math.floor(Math.random() * pool.length); } while (pool.length > 1 && n === idx);
      idx = n;
      render();
    });
  }
})();
