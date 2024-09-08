;
window.QPIR = window.QPIR || {};
(function(_global) {

    var options = {
        title: [
            'RN',
            'Satisfaction'
        ],
        titleColor: '#828282'
    };

    var data = {
        outer: {
            val: 80,
            fg: '#cf7600',
            bg: '#eecfa6',
            label: 'Current ULSO'
        },
        inner: {
            val: 31,
            fg: '#797a7d',
            bg: '#d0d1d2',
            label: 'Previous ULSO'
        }
    };

    var data2 = {
        outer: {
            val: 40,
            fg: '#71588f',
            bg: '#cdc5d8',
            label: 'Current ULSO'
        },
        inner: {
            val: 11,
            fg: '#797a7d',
            bg: '#d0d1d2',
            label: 'Previous ULSO'
        }
    };

    var data3 = {
        outer: {
            val: 40,
            fg: '#77933c',
            bg: '#d0d9bb',
            label: 'Current ULSO'
        },
        inner: {
            val: 11,
            fg: '#797a7d',
            bg: '#d0d1d2',
            label: 'Previous ULSO'
        }
    };

    if (typeof _global.charts === 'undefined') {
        _global.charts = [];
    }

    if (document.querySelector('#root_canvas_1') != null) {
        _global.charts.push( new CircleChart('root_canvas_1', data, options) );
    }

    if (document.querySelector('#root_canvas_2') != null) {
        _global.charts.push( new CircleChart('root_canvas_2', data2, options) );
    }

    if (document.querySelector('#root_canvas_3') != null) {
        _global.charts.push( new CircleChart('root_canvas_3', data3, options) );
    }
    

})(window.QPIR);