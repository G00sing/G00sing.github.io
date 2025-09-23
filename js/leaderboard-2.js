function getTabOneRecords() {
    const tabOneRecords = [
        {
            image: "./images/specific/jobu.jpg",
            name: "JoBu",
            par: 3,
            rd1: "73<br />92<br />19",
            rd2: "74<br />93<br />19",
            rd3: "-<br />-<br />19",
            rd4: "-<br />-<br />19",
            rd5: "-<br />-<br />20",
            net: 147,
            gross: 185,
        },
        {
            image: "./images/specific/top-spin.jpg",
            name: "Top Spin",
            par: -2,
            rd1: "72<br />99<br />27",
            rd2: "70<br />98<br />28",
            rd3: "-<br />-<br />27",
            rd4: "-<br />-<br />27",
            rd5: "-<br />-<br />28",
            net: 142,
            gross: 197,
        },
        {
            image: "./images/specific/soco.jpg",
            name: "SoCo",
            par: 4,
            rd1: "68<br />93<br />25",
            rd2: "80<br />106<br />26",
            rd3: "-<br />-<br />26",
            rd4: "-<br />-<br />26",
            rd5: "-<br />-<br />26",
            net: 148,
            gross: 199,
        },
        {
            image: "./images/specific/miller-time.jpg",
            name: "Miller Time",
            par: -3,
            rd1: "65<br />88<br />23",
            rd2: "76<br />100<br />24",
            rd3: "-<br />-<br />24",
            rd4: "-<br />-<br />23",
            rd5: "-<br />-<br />24",
            net: 141,
            gross: 188,
        },
        {
            image: "./images/specific/grizz.jpg",
            name: "Silent Assassin",
            par: 15,
            rd1: "82<br />101<br />19",
            rd2: "77<br />96<br />19",
            rd3: "-<br />-<br />19",
            rd4: "-<br />-<br />19",
            rd5: "-<br />-<br />20",
            net: 159,
            gross: 197,
        },
        {
            image: "./images/specific/short-grass.jpg",
            name: "Short Grass",
            par: 13,
            rd1: "80<br />105<br />25",
            rd2: "77<br />106<br />31",
            rd3: "-<br />-<br />30",
            rd4: "-<br />-<br />30",
            rd5: "-<br />-<br />31",
            net: 157,
            gross: 211,
        },
        {
            image: "./images/specific/burnsie.jpg",
            name: "Burnsie",
            par: 7,
            rd1: "76<br />103<br />27",
            rd2: "75<br />103<br />28",
            rd3: "-<br />-<br />28",
            rd4: "-<br />-<br />28",
            rd5: "-<br />-<br />29",
            net: 151,
            gross: 206,
        },
        {
            image: "./images/specific/brick-house.jpg",
            name: "Brick House",
            par: 0,
            rd1: "70<br />93<br />23",
            rd2: "74<br />98<br />24",
            rd3: "-<br />-<br />24",
            rd4: "-<br />-<br />23",
            rd5: "-<br />-<br />24",
            net: 144,
            gross: 191,
        },
    ];

    // Sort the rows by par (lowest par is position 1)
    tabOneRecords.sort((a, b) => a.par - b.par);

    const $container = $("#pills-tab1 .generated-records-2");
    $container.empty();

    tabOneRecords.forEach((item, idx) => {
        const $row = $('<div class="row mb-3 border-bottom border-charcoal"></div>');

        const parDisplay = item.par === 0 ? "E" : item.par > 0 ? `+${item.par}` : item.par;

        const columns = [
            // Position
            `<div class="col-1 col-md-1 my-auto text-center txt-eggshell">${idx + 1}</div>`,
            // Image
            `<div class="col-2 col-md-3 mx-auto my-auto">
                <p align="center">
                    <img src="${item.image}" class="max-w-3em rounded-circle img-fluid w-100 border border-myrtle" alt="${item.name}">
                    <span class="txt-eggshell"><strong>${item.name}</strong></span>
                </p>
            </div>`,
            // Player Name
            // `<div class="col-0 col-md-2 my-auto d-none d-md-block ">
            //     <p>
            //         <img src="${item.image}" class="max-w-2em rounded-circle img-fluid w-100 border border-myrtle" alt="${item.name}">
            //         <span class="txt-eggshell"><strong>${item.name}</strong></span>
            //     </p>
            // </div>`,
            // Par
            `<div class="col-2 col-md-1 my-auto text-center"><p class="txt-blueberry"><strong>${parDisplay}</strong></p></div>`,
            // RD's
            `<div class="col-1 col-md-1 my-auto text-center"><p class="txt-eggshell">${item.rd1}</p></div>`,
            `<div class="col-1 col-md-1 my-auto text-center"><p class="txt-eggshell">${item.rd2}</p></div>`,
            `<div class="col-1 col-md-1 my-auto text-center"><p class="txt-eggshell">${item.rd3}</p></div>`,
            `<div class="col-1 col-md-1 my-auto text-center"><p class="txt-eggshell">${item.rd4}</p></div>`,
            `<div class="col-1 col-md-1 my-auto text-center"><p class="txt-eggshell">${item.rd5}</p></div>`,
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