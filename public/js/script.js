$(document).ready(function ham_open() {
    $(".hamburgerIcon").click(function () {
        $(".mobileHamburger").slideDown()
        $(".hmaburgerCloseIcon").show()
    })

    $(".hmaburgerCloseIcon").click(function ham_close() {
        $(".mobileHamburger").slideUp()
        $(".hmaburgerCloseIcon").hide()
    })

})