function getTabOneRecords() {
    const tabOneRecords = [
        {
            image: "./images/specific/jobu.jpg",
            name: "JoBu",
            par: 0,
            rd1: "0<br />0<br />20",
            rd2: "-",
            rd3: "-",
            rd4: "-",
            rd5: "-",
            net: 0,
            gross: 0,
        },
        {
            image: "./images/specific/top-spin.jpg",
            name: "Top Spin",
            par: 0,
            rd1: "0<br />0<br />20",
            rd2: "-",
            rd3: "-",
            rd4: "-",
            rd5: "-",
            net: 0,
            gross: 0,
        },
        {
            image: "./images/specific/soco.png",
            name: "Mr SoCo",
            par: 0,
            rd1: "0<br />0<br />20",
            rd2: "-",
            rd3: "-",
            rd4: "-",
            rd5: "-",
            net: 0,
            net: 0,
            gross: 0,
        },
        {
            image: "./images/specific/miller-time.png",
            name: "Miller Time",
            par: 0,
            rd1: "0<br />0<br />20",
            rd2: "-",
            rd3: "-",
            rd4: "-",
            rd5: "-",
            net: 0,
            gross: 0,
        },
        {
            image: "./images/specific/grizz.png",
            name: "Grizz",
            par: 0,
            rd1: "0<br />0<br />20",
            rd2: "-",
            rd3: "-",
            rd4: "-",
            rd5: "-",
            net: 0,
            gross: 0,
        },
        {
            image: "./images/specific/short-grass.png",
            name: "Short Grass",
            par: 0,
            rd1: "0<br />0<br />20",
            rd2: "-",
            rd3: "-",
            rd4: "-",
            rd5: "-",
            net: 0,
            gross: 0,
        },
        {
            image: "./images/specific/burnsie.jpg",
            name: "Burnsie",
            par: 0,
            rd1: "0<br />0<br />20",
            rd2: "-",
            rd3: "-",
            rd4: "-",
            rd5: "-",
            net: 0,
            gross: 0,
        },
        {
            image: "./images/specific/brick-house.jpg",
            name: "Brick House",
            par: 0,
            rd1: "0<br />0<br />20",
            rd2: "-",
            rd3: "-",
            rd4: "-",
            rd5: "-",
            net: 0,
            gross: 0,
        },
    ];

    // Sort the rows by par (lowest par is position 1)
    tabOneRecords.sort((a, b) => a.par - b.par);

    const $container = $("#pills-tab1 .generated-records");
    $container.empty();

    tabOneRecords.forEach((item, idx) => {
        const $row = $('<div class="row mb-3"></div>');

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