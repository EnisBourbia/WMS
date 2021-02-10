(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });

})(jQuery);


const autoIdCheckbox = document.getElementById('auto-id-checkbox-product');
const idInput = document.getElementById('id-input-product');

function autoIdProduct() {

if (autoIdCheckbox.checked) {
  idInput.readOnly = true;
  idInput.style.color = 'grey';
  idInput.style.cursor = 'default';

  const date = new Date();
  const time = date.getTime();
  const stringTime = time.toString();
  const trimmedId = Number(stringTime.substring(5,12));
  const result = parseInt(trimmedId, 10);
  idInput.value = result;
  loadPreviewProduct();
} else {
  idInput.readOnly = false;
  idInput.style.color = 'black';
  idInput.style.cursor = 'auto';
}

}

const selectForm = document.getElementById('select-label-form');
const productForm = document.getElementById('product-label-form');
const warehouseForm = document.getElementById('warhouse-label-form');

function changeForm() {
  if (selectForm.value === "product") {
    productForm.style.display = "block";
    warehouseForm.style.display = "none";
    idInput.readOnly = true;
    idInput.style.color = 'grey';
    idInput.style.cursor = 'default';

    const date = new Date();
    const time = date.getTime();
    const stringTime = time.toString();
    const trimmedId = Number(stringTime.substring(5,12));
    const result = parseInt(trimmedId, 10);
    idInput.value = result;
    loadPreviewProduct();
  } else if (selectForm.value == "warehouse") {
    warehouseForm.style.display = "block";
    productForm.style.display = "none";
  } else {
    productForm.style.display = "none";
    warehouseForm.style.display = "none";
  }

	initPreview();
}


function printDiv(id) {
            var a = window.open('products/print/'+id, '', 'height=600, width=600');
            a.print();
          //  a.document.close();
        }

function initPreview() {
	const preview = document.getElementById('label-preview');
			preview.style.display = 'block';

		}
