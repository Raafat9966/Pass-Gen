var init = () => {
    document.getElementById("button").addEventListener(
        "click",
        function (event) {
            event.preventDefault();
            document.getElementById("message").value = Math.floor(
                Math.random() * 1000000000
            );
        },
        true
    );
};
