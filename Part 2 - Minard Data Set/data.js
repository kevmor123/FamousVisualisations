var napoleon = {};

napoleon.cities =
    [{"lon": 24.0 ,"lat":55.0 ,"CITY":"Kowno" },
     {"lon": 25.3 ,"lat":54.7 ,"CITY":"Wilna" },
     {"lon": 26.4 ,"lat":54.4 ,"CITY":"Smorgoni",DIR:-1},
     {"lon": 26.8 ,"lat":54.3 ,"CITY":"Molodexno",DIR:-1},
     {"lon": 27.7 ,"lat":55.2 ,"CITY":"Gloubokoe"},
     {"lon": 27.6 ,"lat":53.9 ,"CITY":"Minsk",DIR:-1},
     {"lon": 28.5 ,"lat":54.3 ,"CITY":"Studienska",DIR:-1},
     {"lon": 28.7 ,"lat":55.5 ,"CITY":"Polotzk"},
     {"lon": 29.2 ,"lat":54.4 ,"CITY":"Bobr",DIR:-1},
     {"lon": 30.2 ,"lat":55.3 ,"CITY":"Witebsk"},
     {"lon": 30.4 ,"lat":54.5 ,"CITY":"Orscha",DIR:-1},
     {"lon": 30.4 ,"lat":53.9 ,"CITY":"Mohilow",DIR:-1},
     {"lon": 32.0 ,"lat":54.8 ,"CITY":"Smolensk"},
     {"lon": 33.2 ,"lat":54.9 ,"CITY":"Dorogobouge"},
     {"lon": 34.3 ,"lat":55.2 ,"CITY":"Wixma",DIR:-1},
     {"lon": 34.4 ,"lat":55.5 ,"CITY":"Chjat"},
     {"lon": 36.0 ,"lat":55.5 ,"CITY":"Mojaisk"},
     {"lon": 37.6 ,"lat":55.8 ,"CITY":"Moscou"},
     {"lon": 36.6 ,"lat":55.3 ,"CITY":"Tarantino",DIR:-1},
     {"lon": 36.5 ,"lat":55.0 ,"CITY":"Malo-jarosewli",DIR:-1}
    ]

napoleon.TEMP = [
    {lon:37.6, TEMP:0,   DATE:"18 Oct 1812"},
    {lon:36.0, TEMP:0,   DATE:"24 Oct 1812"},
    {lon:33.2, TEMP:-9,  DATE:"09 Nov 1812"},
    {lon:32.0, TEMP:-21, DATE:"14 Nov 1812"},
    {lon:29.2, TEMP:-11, DATE:"24 Nov 1812"},
    {lon:28.5, TEMP:-20, DATE:"28 Nov 1812"},
    {lon:27.2, TEMP:-24, DATE:"01 Dec 1812"},
    {lon:26.7, TEMP:-30, DATE:"06 Dec 1812"},
    {lon:25.3, TEMP:-26, DATE:"07 Dec 1812"}
];

//switch to celsius.
napoleon.TEMP = napoleon.TEMP.map(function(d) {
d.DIR = -1; 
return d})

napoleon.army = [
    /* Group 1 */
    {lon:24.0,  lat:54.9,  SURV:340000, DIR:1,  DIV:1},
    {lon:24.5,  lat:55.0,  SURV:340000, DIR:1,  DIV:1},
    {lon:25.5,  lat:54.6,  SURV:340000, DIR:1,  DIV:1},
    {lon:26.0,  lat:54.7,  SURV:320000, DIR:1,  DIV:1},
    {lon:27.0,  lat:54.8,  SURV:300000, DIR:1,  DIV:1},
    {lon:28.0,  lat:54.9,  SURV:280000, DIR:1,  DIV:1},
    {lon:28.5,  lat:55.0,  SURV:240000, DIR:1,  DIV:1},
    {lon:29.0,  lat:55.1,  SURV:210000, DIR:1,  DIV:1},
    {lon:30.0,  lat:55.2,  SURV:180000, DIR:1,  DIV:1},
    {lon:30.3,  lat:55.3,  SURV:175000, DIR:1,  DIV:1},
    {lon:32.0,  lat:54.8,  SURV:145000, DIR:1,  DIV:1},
    {lon:33.2,  lat:54.9,  SURV:140000, DIR:1,  DIV:1},
    {lon:34.4,  lat:55.5,  SURV:127100, DIR:1,  DIV:1},
    {lon:35.5,  lat:55.4,  SURV:100000, DIR:1,  DIV:1},
    {lon:36.0,  lat:55.5,  SURV:100000, DIR:1,  DIV:1},
    {lon:37.6,  lat:55.8,  SURV:100000, DIR:1,  DIV:1},
    {lon:37.65, lat:55.65, SURV:100000, DIR:-1, DIV:1},
    {lon:37.45, lat:55.62, SURV:98000,  DIR:-1, DIV:1},
    {lon:37.0,  lat:55.0,  SURV:97000,  DIR:-1, DIV:1},
    {lon:36.8,  lat:55.0,  SURV:96000,  DIR:-1, DIV:1},
    {lon:35.4,  lat:55.3,  SURV:87000,  DIR:-1, DIV:1},
    {lon:34.3,  lat:55.2,  SURV:55000,  DIR:-1, DIV:1},
    {lon:33.3,  lat:54.8,  SURV:37000,  DIR:-1, DIV:1},
    {lon:32.0,  lat:54.6,  SURV:24000,  DIR:-1, DIV:1},
    {lon:30.4,  lat:54.4,  SURV:20000,  DIR:-1, DIV:1},
    {lon:29.2,  lat:54.3,  SURV:20000,  DIR:-1, DIV:1},
    {lon:29.13, lat:54.29, SURV:50000,  DIR:-1, DIV:1}, /* joined by DIV 2 */
    {lon:28.5,  lat:54.2,  SURV:50000,  DIR:-1, DIV:1},
    {lon:28.3,  lat:54.3,  SURV:28000,  DIR:-1, DIV:1},
    {lon:27.2,  lat:54.3,  SURV:12000,  DIR:-1, DIV:1},
    {lon:26.7,  lat:54.4,  SURV:14000,  DIR:-1, DIV:1},
    {lon:25.3,  lat:54.4,  SURV:8000,   DIR:-1, DIV:1},
    {lon:24.4,  lat:54.4,  SURV:4000,   DIR:-1, DIV:1},
    {lon:24.2,  lat:54.4,  SURV:4000,   DIR:-1, DIV:1},
    {lon:24.1,  lat:54.4,  SURV:10000,   DIR:-1, DIV:1},
    /* Group 2 */
    {lon:24.0,  lat:55.1,  SURV:60000,  DIR:1,  DIV:2},
    {lon:24.5,  lat:55.2,  SURV:60000,  DIR:1,  DIV:2},
    {lon:25.5,  lat:54.7,  SURV:60000,  DIR:1,  DIV:2},
    {lon:26.6,  lat:55.7,  SURV:40000,  DIR:1,  DIV:2},
    {lon:27.4,  lat:55.6,  SURV:33000,  DIR:1,  DIV:2},
    {lon:28.7,  lat:55.5,  SURV:33000,  DIR:1,  DIV:2},
    {lon:28.7,  lat:55.5,  SURV:33000,  DIR:-1, DIV:2},
    {lon:29.13, lat:54.29, SURV:30000,  DIR:-1, DIV:2},
    /* Group 3 */
    {lon:24.0,  lat:55.2,  SURV:22000,  DIR:1,  DIV:3},
    {lon:24.5,  lat:55.3,  SURV:22000,  DIR:1,  DIV:3},
    {lon:24.6,  lat:55.8,  SURV:6000,   DIR:1,  DIV:3},
    {lon:24.6,  lat:55.8,  SURV:6000,   DIR:-1, DIV:3},
    {lon:24.2,  lat:54.4,  SURV:6000,   DIR:-1, DIV:3}
];