$(clickMe).on('click',function(){
    $(popover).show()
    $(document).one('click',function(){
      console.log('document')
    $(popover).hide()
  })
  })
  $(wrapper).on('click',function(e){
    e.preventDefault()
    e.stopPropagation()
  })
  /*
  $(wrapper).on('click',false)*/  //等价于上方函数
  