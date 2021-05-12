<div id='test'>
	<div class="box__wrp">
		<div class="box__row">
			<div class="arrow prev" onclick="prevArrow(this)"></div>
   				 <div id='listed-items'>
     				   <div @tag="items" class="box__column">
							<a @tag="item" data-view="{{buyoutUrl}}" href="{{url}}" class="box__item item-box item-box_1" target="_blank">
								<div class="item-box__image">
									<img src="{{imgUrl}}" alt="">
								</div>
                       			<div class="item-box__text">
                                    <div class="item-box__descr">
                                        {{text}}
                                    </div>   
                                    <div class="item-box__bottom">
                                        <div class="item-box__btn">{{LANGUAGE_READ_MORE}}</div>
                                    </div>
								</div>                
							</a>
						</div>
    				</div>		
			<div class="arrow next" onclick="nextArrow(this)" data-event-load='true'></div>
    </div>
        
	<script>
   		var countScroll = 0;
        const event = new Event('getAddItems');

        function prevArrow(el) {
          if (countScroll > 0) countScroll--;
          el.nextSibling.style.transform = `translate(0, -${el.parentElement.offsetHeight * countScroll}px)`;
        }

        function nextArrow(el) {
          let height = 0;
          if (
            el.parentElement.offsetHeight * (countScroll + 1) + el.parentElement.offsetHeight >
            el.previousSibling.offsetHeight
          ) {
            if (el.parentElement.offsetHeight < el.previousSibling.offsetHeight) {
              height = -el.previousSibling.offsetHeight + el.parentElement.offsetHeight;
            }
          } else {
            height = -el.parentElement.offsetHeight * (countScroll + 1);
            countScroll++;
          }
          el.previousSibling.style.transform = `translate(0, ${height}px)`;

          if (height >= el.previousSibling.offsetHeight) {
            el.dispatchEvent(event);
          }
        }
    </script>
    </div>
</div>