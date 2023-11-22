// DC.com GNB메뉴 데이터 
export const menu = [
    {
        txt:"CHARACTERS",
        link:"/characters",
    },
    {
        txt:"COMICS",
        link:"/comics",
        sub:[
            {
                txt: "LATEST COMICS",
                link: "/co1",
            },
            {
                txt: "DC UNIVERSE INFINITE",
                link: "/co2",
            },
            {
                txt: "ALL COMICS SERIES",
                link: "/co3",
            },
        ],
    },
    {
        txt:"MOVIES & TV",
        link:"/movies",
        sub:[
            {
                txt: "DC MOVIES",
                link: "/movies",
            },
            {
                txt: "DC SERIES",
                link: "/series",
            },
            {
                txt: "DC ON HBO MAX",
                link: "/mv",
            },
        ]
    },
    {
        txt:"GAMES",
        link:"/games",
    },
    {
        txt:"NEWS",
        link:"/news",
    },
    {
        txt:"VIDEO",
        link:"/video",
    },
    {
        txt:"OPNIONS",
        link:"/board",
    },
];