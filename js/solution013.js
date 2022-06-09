function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){

    if  (dolphin===true) {
    
      sharkSpeed=sharkSpeed/2
      
    }
    
    
    if (pontoonDistance/youSpeed < sharkDistance/sharkSpeed){
      
      return "Alive!"
    }
    
    else if(pontoonDistance/youSpeed > sharkDistance/sharkSpeed){
      
      return "Shark Bait!"
    }
  }
  