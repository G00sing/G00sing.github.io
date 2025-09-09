function getTabOneRecords() {
    const tabOneRecords = [
        {
            image: "./images/specific/jobu.jpg",
            name: "JoBu",
            par: -3,
            rd1: "89<br />67<br />22",
            rd2: "92<br />71<br />21",
            rd3: "99<br />79<br />20",
            rd4: "89<br />71<br />18",
            rd5: "86<br />68<br />18",
            net: 356,
            gross: 455,
        },
        {
            image: "./images/specific/top-spin.jpg",
            name: "Top Spin",
            par: -6,
            rd1: "100<br />70<br />30",
            rd2: "96<br />71<br />25",
            rd3: "99<br />71<br />28",
            rd4: "95<br />71<br />24",
            rd5: "95<br />70<br />25",
            net: 353,
            gross: 485,
        },
        {
            image: "./images/specific/soco.png",
            name: "Mr SoCo",
            par: +99,
            rd1: "_",
            rd2: "-",
            rd3: "-",
            rd4: "-",
            rd5: "-",
            net: 0,
            gross: 0,
        },
        {
            image: "./images/specific/miller-time.png",
            name: "Miller Time",
            par: +29,
            rd1: "87<br />62<br />25",
            rd2: "98<br />74<br />24",
            rd3: "108<br />84<br />24",
            rd4: "103<br />82<br />21",
            rd5: "107<br />86<br />21",
            net: 388,
            gross: 503,
        },
        {
            image: "./images/specific/grizz.png",
            name: "Grizz",
            par: +2,
            rd1: "99<br />78<br />21",
            rd2: "87<br />67<br />20",
            rd3: "92<br />73<br />19",
            rd4: "85<br />69<br />16",
            rd5: "90<br />74<br />16",
            net: 361,
            gross: 453,
        },
        {
            image: "./images/specific/short-grass.png",
            name: "Short Grass",
            par: +7,
            rd1: "104<br />72<br />32",
            rd2: "104<br />77<br />27",
            rd3: "112<br />82<br />30",
            rd4: "95<br />69<br />26",
            rd5: "98<br />66<br />27",
            net: 371,
            gross: 513,
        },
        {
            image: "./images/specific/burnsie.jpg",
            name: "Burnsie",
            par: +8,
            rd1: "101<br />71<br />30",
            rd2: "98<br />73<br />25",
            rd3: "104<br />76<br />28",
            rd4: "95<br />71<br />24",
            rd5: "101<br />76<br />25",
            net: 367,
            gross: 499,
        },
        {
            image: "./images/specific/brick-house.jpg",
            name: "Brick House",
            par: -16,
            rd1: "104<br />75<br />29",
            rd2: "93<br />66<br />27",
            rd3: "92<br />65<br />27",
            rd4: "92<br />69<br />23",
            rd5: "90<br />66<br />24",
            net: 341,
            gross: 471,
        },
    ];

    // Sort the rows by par (lowest par is position 1)
    tabOneRecords.sort((a, b) => a.par - b.par);

    const $container = $("#pills-tab1 .generated-records");
    $container.empty();

    tabOneRecords.forEach((item, idx) => {
        const $row = $('<div class="row mb-3 border-bottom border-charcoal"></div>');

        const columns = [
            // Position
            `<div class="col-1 col-md-1 my-auto text-center">${idx + 1}</div>`,
            // Image
            `<div class="col-0 col-md-1 my-auto d-none d-md-block"><img src="${item.image}" class="max-w-2em rounded-circle img-fluid w-100 border border-myrtle" alt="${item.name}"></div>`,
            // Player Name
            `<div class="col-2 col-md-2 my-auto"><p><strong>${item.name}</strong></p></div>`,
            // Par
            `<div class="col-2 col-md-1 my-auto text-center"><p class="txt-blueberry"><strong>${item.par}</strong></p></div>`,
            // RD's
            `<div class="col-1 col-md-1 my-auto text-center"><p>${item.rd1}</p></div>`,
            `<div class="col-1 col-md-1 my-auto text-center"><p>${item.rd2}</p></div>`,
            `<div class="col-1 col-md-1 my-auto text-center"><p>${item.rd3}</p></div>`,
            `<div class="col-1 col-md-1 my-auto text-center"><p>${item.rd4}</p></div>`,
            `<div class="col-1 col-md-1 my-auto text-center"><p>${item.rd5}</p></div>`,
            // Net
            `<div class="col-0 col-md-1 my-auto text-center d-none d-md-block"><p class="txt-neon-green"><strong>${item.net}</strong></p></div>`,
            // Gross
            `<div class="col-0 col-md-1 my-auto text-center d-none d-md-block"><p class="txt-apple"><strong>${item.gross}</strong></p></div>`,
            // Net & Gross on Mobile
            `<div class="col-2 col-md-0 my-auto text-center d-block d-md-none"><p class="txt-neon-green"><strong>${item.net}</strong></p><p class="txt-apple"><strong>${item.gross}</strong></p></div>`,
        ];

        // Add each column to the row
        columns.forEach((column) => {
            $row.append($(column));
        });

        // Add the row to the table (container)
        $container.append($row);
    });
}

$(document).ready(function () {
    // Make the tab buttons work when clicked. When clicked they will
    // show and hide some content.
    $("#pills-tab a").on("click", function (e) {
        e.preventDefault();
        $(this).tab("show");
    });

    // Load the records for tab 1
    getTabOneRecords();
});