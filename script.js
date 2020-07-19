var init = () => {
    document.getElementById("button").addEventListener(
        "click",
        function (event) {
            event.preventDefault();
            document.getElementById("message").value = Math.floor(
                Math.random() * 100000000000000
            );
        },
        true
    );
};
