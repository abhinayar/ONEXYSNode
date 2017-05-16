var express = require('express'),
  path = require('path'),
  pug = require('pug'),
  http = require('http');

var app = express();
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));
app.set("view engine", "pug")

app.get('/homeExample', function(req, res) {
  res.render("home", {
    data : data
  });
});

app.get('/moduleExample', function(req, res) {
  res.render("module", {
    data : moduleData
  });
});

app.listen(8080, function(){
  console.log('Example app listening on port 8080!')
})

var data = {
  week : {
    title : "Week2",
    number : 2
  },
  modules : {
    1 : {
      nameLine1 : "(Linear)",
      nameLine2 : "Functions",
      moduleAvailable : true,
      moduleURL : "/courses/686/pages/final-linear-functions",
      moduleBackground : 1
    },
    2 : {
      nameLine1 : "Fitting Data With",
      nameLine2 : "Linear Functions",
      moduleAvailable : true,
      moduleURL : "/courses/686/pages/final-fitting-data-with-linear-functions",
      moduleBackground : 2
    },
    3 : {
      nameLine1 : "Function",
      nameLine2 : "Transformations",
      moduleAvailable : true,
      moduleURL : "/courses/686/pages/final-function-transformations",
      moduleBackground : 3
    },
    4 : {
      nameLine1 : "Quadratic",
      nameLine2 : "Functions",
      moduleAvailable : true,
      moduleURL : "/courses/686/pages/final-quadratic-functions",
      moduleBackground : 4
    },
    5 : {
      nameLine1 : "Intro to",
      nameLine2 : "Exponential Functions",
      moduleAvailable : true,
      moduleURL : "/courses/686/pages/final-intro-to-exponential-functions",
      moduleBackground : 5
    },
    6 : {
      nameLine1 : "Compound Interest",
      nameLine2 : "&amp; the Number e",
      moduleAvailable : true,
      moduleURL : "/courses/686/pages/final-compound-interest-and-the-number-e",
      moduleBackground : 6
    },
    7 : {
      nameLine1 : "Logarithmic",
      nameLine2 : "Functions",
      moduleAvailable : true,
      moduleURL : "/courses/686/pages/final-logarithmic-functions",
      moduleBackground : 7
    },
    8 : {
      nameLine1 : "Intro to",
      nameLine2 : "Periodic Motion",
      moduleAvailable : true,
      moduleURL : "/courses/686/pages/final-introduction-to-periodic-motion",
      moduleBackground : 10
    },
    9 : {
      nameLine1 : "Geometry and",
      nameLine2 : "Periodic Motion",
      moduleAvailable : true,
      moduleURL : "/courses/686/pages/final-the-geometry-of-periodic-motion-part-1",
      moduleBackground : 11
    },
    10 : {
      nameLine1 : "Movie",
      nameLine2 : "Physics",
      moduleAvailable : true,
      moduleURL : "/courses/686/pages/final-movie-physics",
      moduleBackground : 16
    },
    11 : {
      nameLine1 : "Post-Test",
      nameLine2 : "",
      moduleAvailable : true,
      moduleURL : "/courses/686/pages/final-posttest",
      moduleBackground : 00
    }
  },
  badgesPageLink : "/courses/686/pages/final-badges",
  entries : [
    {
      entryWeek : "Week 2",
      entryDate: "July 8th",
      entryText : "This week, 2 new modules: <strong>Function Transformations</strong> and <strong>Quadratic Functions.</strong> We get it. You've have seen these topics before. So you also have some challenging and interesting applications.<br /><br />This week you likely will be meeting with your team on <em>Monday</em> and <em>Thursday</em> (confirm with your coach). On each of these days: 1) Finish the application Reflection <em>by 4p</em>. This helps your coach know how to focus the team meeting. 2) Application quiz opens up at 8p on same day after your meeting.<br /><br />Lastly, check out the two new Life @ Yale videos from Rega and Jed."
    },
    {
      entryWeek: "Week 1",
      entryDate : "June 29th",
      entryText : "You're here! <em>Welcome to ONEXYS!</em> Onexys is not just about the math, it's more than that. It's about connections. So head on over to the <a id='' class='' title='Welcome to ONEXYS! Introduce yourself! ' href='/courses/686/discussion_topics/5406' target='' data-api-endpoint='https://yale.instructure.com/api/v1/courses/686/discussion_topics/5406' data-api-returntype='Discussion'><u>Discussion Board</u></a> and introduce yourself. <br /><br /> You are going to be meeting twice a week with your coach and team. Normally, your team meetings will happen on Mondays and Thursdays. <br /><br /> This week, you will want to complete the <strong>(Linear) Functions</strong> and <strong>Fitting Data with Linear Functions</strong> modules."
    }
  ],
  lifeAtYaleLink : "/courses/686/pages/final-life-at-yale-videos",
  videoImageSrc : "https://onexys.me/2016images/videos/lifeAtYaleThumbnail.png",
  videoPlayButtonSrc : "https://onexys.me/images/playbutton.png",
  lifeAtYaleVideos : [
    {
      videoLocation : "https://yale.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=0b6d9f96-11f1-4110-a56c-71b1519aec09",
      videoDesc : "Rega talks about STARS (Science, Technology, and Research Scholars) at Yale!"
    },
    {
      videoLocation : "https://yale.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=04510724-91dd-47a7-a05e-1641788ac1cb",
      videoDesc : "Jed Thompson talks about the research opportunities at Yale."
    },
    {
      videoLocation : "https://yale.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=a625fa40-d0a3-46e4-a3f3-b3bcdbb78576",
      videoDesc : "Kenneth Jackson talks about move-in day."
    },
    {
      videoLocation : "https://yale.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=16cec906-f7f1-4606-b852-0b0f2f9a6a03",
      videoDesc : "James Kim from the Admissions office talks about the Tutoring website."
    }
  ]
}

var moduleData = {
  titleBlue: "Compound Interest and",
  titleYellow: "the Number e",
  backgroundImageSrc : "https://yale.instructure.com/courses/686/files/164134/preview",
  backgroundImageAlt : "Linsly-Chittenden_Module.png",
  backgroundImageName : "Linsly-Chittenden Hall",
  backgroundImageDesc : "Linsly-Chittenden Hall (LC) serves as a regular classroom space for English, History, and Language classes at Yale. In 1961, the Milgram experiment on obedience to authority figures was conducted in the basement of this building.",
  overview_start : "Over. And over.  And over again and again and again. In this module, we explore how compounding interest over and over impacts the growth of a a bank account, the economy, and many other things. When we talk about Compound Interest we ask questions like:",
  overview_list : [
    {
      text : "What's the effective annual interest rate if we compound interest several times a year?"
    },
    {
      text : "What's the effective annual interest rate if we compound interest all the time? Like, every moment of every day, i.e. <i>continuously</i>?"
    },
    {
      text : "Where does the number <em>e</em> come from? How does it relate to compound interest?"
    }
  ],
  overview_end : "We interact with these ideas in the application <em>Interest Rates and the Fisher Equation.</em>",
  videoPlayButtonSrc : "https://onexys.me/2016images/videos/playbutton.png",
  videos : {
    1 : {
      videoLocation : "https://yale.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=81ce276e-8004-4586-8c75-5c52cd7a1b22",
      videoImageLocation : "https://yale.instructure.com/courses/686/files/164164/preview",
      videoImageAlt : "4.4.1_compound_number_e_5K_bug.png",
      videoDesc : "Compound Interest and the Number <i>e</i>"
    }
  },
  practiceDesc : "Practice, practice, practice! We would like you to keep working until you reach 90% proficiency for this module in ALEKS.",
  practiceQuizLocation : "/courses/686/modules/items/7296",
  applySection : {
    applyTitle : "Interest Rates and the Fisher Equation",
    applyDesc : "Irving Fisher (a Yale grad!) received Yale's first PhD in Economics. In this application we look at his understanding of the relationship between interest rates and inflation rates.",
    applyPDFSrc : '/courses/686/files/146731/download?wrap=1',
    applyPDFEndpoint : 'https://yale.instructure.com/api/v1/courses/686/files/14673',
    applyPDFReturnType : 'File',
    applyDiscussionLocation : "/courses/686/assignments/5222",
    applyQuiz : "/courses/686/assignments/5914",
    icons : {
      read : "https://yale.instructure.com/courses/686/files/164208/preview",
      reflect : "https://yale.instructure.com/courses/686/files/164205/preview",
      meet : "https://yale.instructure.com/courses/686/files/164207/preview",
      answer : "https://yale.instructure.com/courses/686/files/164206/preview"
    }
  },
  exploreSection : [
    {
      iframe_html : '<iframe width="400" height="225" src="https://www.youtube.com/embed/jQSoXQ9yPc4" alt="financial advice" frameborder="0" allowfullscreen></iframe>',
      iframe_src : "https://www.youtube.com/embed/jQSoXQ9yPc4",
      iframe_desc : "Here's some pretty good financial advice that relates to compound interest."
    }, 
    {
      iframe_html : '<iframe src="https://player.vimeo.com/video/58282233" alt="stock market and equilibrium" width="400" height="225" allowfullscreen="allowfullscreen" webkitallowfullscreen="webkitallowfullscreen" mozallowfullscreen="mozallowfullscreen"></iframe>',
      iframe_src : "https://player.vimeo.com/video/58282233",
      iframe_desc : "Can the economy be at equilibrium or headed towards it? The Stock Market Crash of the 1920's said 'no'. Irving Fisher explained why not."
    }
  ]
}

