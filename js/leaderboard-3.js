function getTabOneRecords() {
    const tabOneRecords = [
        {
            image: "./images/specific/jobu.jpg",
            name: "JoBu",
            par: -1,
            rd1: "-3<br />87<br />69",
            rd2: "2<br />91<br />74",
            rd3: "-<br />-<br />-",
            rd4: "-<br />-<br />-",
            rd5: "-<br />-<br />-",
            net: 143,
            gross: 178,
        },
        {
            image: "./images/specific/top-spin.jpg",
            name: "Top Spin",
            par: 6,
            rd1: "2<br />100<br />74",
            rd2: "4<br />100<br />74",
            rd3: "-<br />-<br />-",
            rd4: "-<br />-<br />-",
            rd5: "-<br />-<br />-",
            net: 148,
            gross: 200,
        },
        {
            image: "./images/specific/soco.jpg",
            name: "SoCo",
            par: 13,
            rd1: "6<br />102<br />78",
            rd2: "7<br />103<br />79",
            rd3: "-<br />-<br />-",
            rd4: "-<br />-<br />-",
            rd5: "-<br />-<br />-",
            net: 157,
            gross: 205,
        },
        {
            image: "./images/specific/miller-time.jpg",
            name: "Miller Time",
            par: -4,
            rd1: "-1<br />93<br />71",
            rd2: "-3<br />91<br />69",
            rd3: "-<br />-<br />-",
            rd4: "-<br />-<br />-",
            rd5: "-<br />-<br />-",
            net: 140,
            gross: 184,
        },
        {
            image: "./images/specific/grizz.jpg",
            name: "Silent Assassin",
            par: 18,
            rd1: "8<br />98<br />80",
            rd2: "10<br />100<br />82",
            rd3: "-<br />-<br />-",
            rd4: "-<br />-<br />-",
            rd5: "-<br />-<br />-",
            net: 162,
            gross: 198,
        },
        {
            image: "./images/specific/short-grass.jpg",
            name: "Short Grass",
            par: 12,
            rd1: "3<br />98<br />75",
            rd2: "9<br />107<br />81",
            rd3: "-<br />-<br />-",
            rd4: "-<br />-<br />-",
            rd5: "-<br />-<br />-",
            net: 156,
            gross: 205,
        },
        {
            image: "./images/specific/burnsie.jpg",
            name: "Burnsie",
            par: 17,
            rd1: "8<br />108<br />80",
            rd2: "9<br />109<br />81",
            rd3: "-<br />-<br />-",
            rd4: "-<br />-<br />-",
            rd5: "-<br />-<br />-",
            net: 161,
            gross: 217,
        },
        {
            image: "./images/specific/brick-house.jpg",
            name: "Brick House",
            par: 0,
            rd1: "5<br />99<br />77",
            rd2: "-5<br />89<br />67",
            rd3: "-<br />-<br />-",
            rd4: "-<br />-<br />-",
            rd5: "-<br />-<br />-",
            net: 144,
            gross: 188,
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