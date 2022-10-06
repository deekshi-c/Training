function a() {
    let aa = 5;
    function b() {
        let bb = 7;
        function c() {
            let cc = 9;
            function d() {
                let dd = 19;
                console.log(aa);
                console.log(bb);
                console.log(cc);
                console.log(dd);

            }
            d();
        }
        c();
    }
    b();
}

a()
