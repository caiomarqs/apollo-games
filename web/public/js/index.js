class OverMenu{
    
    _overElement = $('#over-menu')
    static _isActive = false
    _span45 = $('.close-x-45')
    _span135 = $('.close-x-135')
    
    aciona(){

        if(OverMenu._isActive){
            this._overElement.removeClass('colapse-over')
            this._span45.removeClass('rotate-45')
            this._span135.removeClass('rotate-135')
            OverMenu._isActive = false
            return 
        }

        this._overElement.addClass('colapse-over')
        this._span45.addClass('rotate-45')
        this._span135.addClass('rotate-135')
        OverMenu._isActive = true
        
    }
} 

const overMenu = new OverMenu()

$('#hambuger-menu').click(_ => overMenu.aciona())
$('#close-over').click(_ => overMenu.aciona())
$('.li-over').click(_ => overMenu.aciona())
$('.language-btn').click(_ => overMenu.aciona())
