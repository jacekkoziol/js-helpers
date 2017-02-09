// require 'matrixToTransformObject'

// Prevent element to go out of the viewport
// @param target : HTMLElement

function adjustPosition(target) {

    let extraMargin = 10; //in pixels
    let targetPos = target.getBoundingClientRect();
    let viewport = {width: window.innerWidth, height: window.innerHeight};
    let correctLeft, correctTop;

    let targetRight = viewport.width - targetPos.right;
    let targetBottom = viewport.height - targetPos.bottom;

    // Normalize
    let matrix = getComputedStyle(target).getPropertyValue('transform');
    let { translateX, translateY } = Helpers.matrixToTransformObject(matrix);
    let targetParentPos = target.parentElement.getBoundingClientRect();

    let left = targetPos.left - targetParentPos.left - translateX; //parseFloat(getComputedStyle(target).left);
    let top = targetPos.top - targetParentPos.top - translateY; // parseFloat(getComputedStyle(target).top);

    target.style.right = 'auto';
    target.style.left = left + 'px';
    target.style.bottom = 'auto';
    target.style.top = top + 'px';

    // Left Position
    if(targetPos.left < 0) {
      correctLeft = left + (Math.abs(targetPos.left) + extraMargin);
      target.style.right = 'auto';
      target.style.left = correctLeft + 'px';
    }

    // Right Position
    if (targetRight < 0 && targetPos.left >= 0) {
      correctLeft = left - (Math.abs(targetRight) + extraMargin);
      target.style.right = 'auto';
      target.style.left = correctLeft + 'px';
    }

    // Bottom
    if (targetBottom < 0 && targetPos.top >= 0) {
      correctTop = top - (Math.abs(targetBottom) + extraMargin);
      target.style.bottom = 'auto';
      target.style.top = correctTop + 'px';
    }
  }

function resetPosition(target) {
  if (target) {
    target.removeAttribute('style');
  }
}