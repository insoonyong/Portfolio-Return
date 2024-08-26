 // 모든 모달 트리거 요소를 가져오기
 const modalTriggers = document.querySelectorAll('.text-item');

 // 각 트리거에 클릭 이벤트 리스너 추가
 modalTriggers.forEach(trigger => {
   trigger.addEventListener('click', function() {
     const modalId = this.getAttribute('data-modal');
     const modal = document.getElementById(modalId);
     modal.style.display = 'block';
   });
 });

 // 모든 닫기 버튼 요소를 가져오기
 const closeButtons = document.querySelectorAll('.close');

 // 각 닫기 버튼에 클릭 이벤트 리스너 추가
 closeButtons.forEach(button => {
   button.addEventListener('click', function() {
     const modal = this.closest('.modal');
     modal.style.display = 'none';
   });
 });

 // 모달 외부를 클릭했을 때 모달 닫기
 window.addEventListener('click', function(event) {
   if (event.target.classList.contains('modal')) {
     event.target.style.display = 'none';
   }
 });