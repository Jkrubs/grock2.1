/**
 * Scaffolding Page Transition Script
 * Developed for a construction services website.
 * Creates a 5x3 grid of tiles that scaleY from 0->1 on page exit,
 * and scaleY from 1->0 on page entrance, staggered in a randomized order using GSAP.
 */

(function () {
  'use strict';

  function initScaffoldingTransition() {
    // Prevent duplicate initialization
    if (document.getElementById('transition-overlay')) return;

    const transitionCompletedPageLoad = sessionStorage.getItem('scaffoldingTransitionActive') === 'true';
    sessionStorage.removeItem('scaffoldingTransitionActive');

    // Create the overlay container
    const overlay = document.createElement('div');
    overlay.id = 'transition-overlay';
    
    // Set overlay styles
    Object.assign(overlay.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100vw',
      height: '100vh',
      zIndex: '9999',
      pointerEvents: transitionCompletedPageLoad ? 'none' : 'auto', // Active on load
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gridTemplateRows: 'repeat(3, 1fr)'
    });

    // Create 15 tiles
    const tiles = [];
    for (let i = 0; i < 15; i++) {
      const tile = document.createElement('div');
      tile.className = 'scaffolding-tile';
      
      // Set tile styles
      Object.assign(tile.style, {
        backgroundColor: 'var(--background, #0a0a0a)',
        height: 'calc(100vh / 3)',
        transformOrigin: 'top',
        transform: transitionCompletedPageLoad ? 'scaleY(0)' : 'scaleY(1)' // Keep destination page visible after link transition
      });
      
      overlay.appendChild(tile);
      tiles.push(tile);
    }
    
    document.body.appendChild(overlay);

    // Fisher-Yates Shuffle Algorithm
    function shuffleArray(array) {
      const arr = [...array];
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Custom cubic-bezier(0.4, 0, 0.2, 1) ease or fallback
    let customEase = 'power2.inOut';
    if (typeof gsap !== 'undefined' && typeof CustomEase !== 'undefined') {
      gsap.registerPlugin(CustomEase);
      CustomEase.create('scaffoldEase', '0.4, 0, 0.2, 1');
      customEase = 'scaffoldEase';
    }

    // Entrance Transition (ScaleY 1 -> 0, randomized staggered order)
    function runEntranceTransition() {
      if (prefersReducedMotion) {
        tiles.forEach(tile => tile.style.transform = 'scaleY(0)');
        overlay.style.pointerEvents = 'none';
        return;
      }

      if (typeof gsap === 'undefined') {
        // Fallback if GSAP is not loaded
        tiles.forEach(tile => tile.style.transform = 'scaleY(0)');
        overlay.style.pointerEvents = 'none';
        return;
      }

      // Generate randomized order for exit/entrance
      const indices = Array.from({ length: 15 }, (_, i) => i);
      const shuffled = shuffleArray(indices);
      const tl = gsap.timeline({
        onComplete: () => {
          overlay.style.pointerEvents = 'none'; // Allow clicking page elements
        }
      });

      shuffled.forEach((tileIndex, staggerIndex) => {
        tl.to(tiles[tileIndex], {
          scaleY: 0,
          duration: 0.6,
          ease: customEase
        }, staggerIndex * 0.04); // Stagger of ~40ms
      });
    }

    // Trigger Transition Function (ScaleY 0 -> 1, then callback, then ScaleY 1 -> 0)
    window.triggerTransition = function (callback) {
      if (prefersReducedMotion) {
        if (callback) callback();
        return;
      }

      if (typeof gsap === 'undefined') {
        console.warn('GSAP is not loaded. Skipping transition animation.');
        if (callback) callback();
        return;
      }

      overlay.style.pointerEvents = 'auto'; // Block pointer events during transition

      const indices = Array.from({ length: 15 }, (_, i) => i);
      const shuffledIn = shuffleArray(indices);
      const tl = gsap.timeline({
        onComplete: () => {
          if (callback) callback();
        }
      });

      shuffledIn.forEach((tileIndex, staggerIndex) => {
        tl.to(tiles[tileIndex], {
          scaleY: 1,
          duration: 0.6,
          ease: customEase
        }, staggerIndex * 0.04); // Stagger of ~40ms
      });
    };

    // Run entrance transition on startup
    // Use a small timeout to let browser layout settle and GSAP/CustomEase register
    if (!transitionCompletedPageLoad) {
      setTimeout(runEntranceTransition, 50);
    }

    // Intercept all internal <a> link clicks
    document.addEventListener('click', function (e) {
      const targetLink = e.target.closest('a');
      if (!targetLink) return;

      const href = targetLink.getAttribute('href');

      // Check if the link is internal, not a hash, and opens in the same tab
      if (
        href &&
        !href.startsWith('http') &&
        !href.startsWith('#') &&
        !href.startsWith('javascript:') &&
        !targetLink.hasAttribute('download') &&
        targetLink.target !== '_blank'
      ) {
        e.preventDefault();
        window.triggerTransition(function () {
          sessionStorage.setItem('scaffoldingTransitionActive', 'true');
          window.location.href = href;
        });
      }
    });
  }

  // DOMContentLoaded wrapping
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScaffoldingTransition);
  } else {
    initScaffoldingTransition();
  }

  // Account for Elementor frontend JS loading
  if (window.elementorFrontend) {
    if (window.elementorFrontend.hooks) {
      window.elementorFrontend.hooks.addAction('frontend/element_ready/global', function() {
        // Elementor initialization handler if required
      });
    }
  } else {
    document.addEventListener('elementor/frontend/init', function() {
      if (window.elementorFrontend && window.elementorFrontend.hooks) {
        window.elementorFrontend.hooks.addAction('frontend/element_ready/global', function() {
          // Elementor initialization handler if required
        });
      }
    });
  }

})();
