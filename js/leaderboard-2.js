function getTabOneRecords() {
    const tabOneRecords = [
        {
            image: "./images/specific/jobu.jpg",
            name: "JoBu",
            par: 0,
            rd1: "-<br />-<br />19",
            rd2: "-<br />-<br />19",
            rd3: "-<br />-<br />19",
            rd4: "-<br />-<br />19",
            rd5: "-<br />-<br />20",
            net: 0,
            gross: 0,
        },
        {
            image: "./images/specific/top-spin.jpg",
            name: "Top Spin",
            par: 0,
            rd1: "-<br />-<br />27",
            rd2: "-<br />-<br />28",
            rd3: "-<br />-<br />27",
            rd4: "-<br />-<br />27",
            rd5: "-<br />-<br />28",
            net: 0,
            gross: 0,
        },
        {
            image: "./images/specific/soco.jpg",
            name: "SoCo",
            par: 0,
            rd1: "-<br />-<br />25",
            rd2: "-<br />-<br />26",
            rd3: "-<br />-<br />26",
            rd4: "-<br />-<br />26",
            rd5: "-<br />-<br />26",
            net: 0,
            gross: 0,
        },
        {
            image: "./images/specific/miller-time.jpg",
            name: "Miller Time",
            par: 0,
            rd1: "-<br />-<br />23",
            rd2: "-<br />-<br />24",
            rd3: "-<br />-<br />24",
            rd4: "-<br />-<br />23",
            rd5: "-<br />-<br />24",
            net: 0,
            gross: 0,
        },
        {
            image: "./images/specific/grizz.jpg",
            name: "Silent Assassin",
            par: 0,
            rd1: "-<br />-<br />19",
            rd2: "-<br />-<br />19",
            rd3: "-<br />-<br />19",
            rd4: "-<br />-<br />19",
            rd5: "-<br />-<br />20",
            net: 0,
            gross: 0,
        },
        {
            image: "./images/specific/short-grass.jpg",
            name: "Short Grass",
            par: 0,
            rd1: "-<br />-<br />30",
            rd2: "-<br />-<br />31",
            rd3: "-<br />-<br />30",
            rd4: "-<br />-<br />30",
            rd5: "-<br />-<br />31",
            net: 0,
            gross: 0,
        },
        {
            image: "./images/specific/burnsie.jpg",
            name: "Burnsie",
            par: 0,
            rd1: "-<br />-<br />27",
            rd2: "-<br />-<br />28",
            rd3: "-<br />-<br />28",
            rd4: "-<br />-<br />28",
            rd5: "-<br />-<br />29",
            net: 0,
            gross: 0,
        },
        {
            image: "./images/specific/brick-house.jpg",
            name: "Brick House",
            par: 0,
            rd1: "-<br />-<br />23",
            rd2: "-<br />-<br />24",
            rd3: "-<br />-<br />24",
            rd4: "-<br />-<br />23",
            rd5: "-<br />-<br />24",
            net: 0,
            gross: 0,
        },
    ];

    // Sort the rows by par (lowest par is position 1)
    tabOneRecords.sort((a, b) => a.par - b.par);

    const $container = $("#pills-tab1 .generated-records-2");
    $container.empty();

    tabOneRecords.forEach((item, idx) => {
        const $row = $('<div class="row mb-3 border-bottom border-charcoal"></div>');

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
            `<div class="col-2 col-md-1 my-auto text-center"><p class="txt-blueberry"><strong>${item.par}</strong></p></div>`,
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