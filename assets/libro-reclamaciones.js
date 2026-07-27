(function () {
  'use strict';

  var STORAGE_KEY = 'rythoLibroReclamacionesLastSubmission';

  var form = document.getElementById('libro-reclamaciones-form');

  if (form) {
    var minorToggle = form.querySelector('[id^="checkbox-is-minor-"]');
    var minorFields = document.getElementById('rc-minor-fields');

    if (minorToggle && minorFields) {
      var minorInputs = minorFields.querySelectorAll('input');

      var syncMinorFields = function () {
        var isMinor = minorToggle.checked;
        minorFields.hidden = !isMinor;

        for (var i = 0; i < minorInputs.length; i++) {
          minorInputs[i].disabled = !isMinor;
          minorInputs[i].required = isMinor;
          if (!isMinor) minorInputs[i].value = '';
        }
      };

      minorToggle.addEventListener('change', syncMinorFields);
      syncMinorFields();
    }

    var submitButton = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', function () {
      var now = new Date();
      var rand = Math.random().toString(36).slice(2, 6).toUpperCase();
      var code = 'RC-' + now.getFullYear() + pad(now.getMonth() + 1) + pad(now.getDate()) + '-' + rand;

      var codeField = document.getElementById('rc-code');
      var dateField = document.getElementById('rc-datetime');

      if (codeField) codeField.value = code;
      if (dateField) dateField.value = now.toISOString();

      var checkedType = form.querySelector('input[name="contact[Tipo de solicitud]"]:checked');

      try {
        sessionStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({
            code: code,
            type: checkedType ? checkedType.value : '',
            date: now.toISOString()
          })
        );
      } catch (error) {
        // sessionStorage unavailable (private browsing, storage disabled, etc.)
        // — the confirmation panel falls back to a generic message instead.
      }

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.setAttribute('aria-busy', 'true');
      }
    });
  }

  var confirmation = document.getElementById('rc-confirmation');

  if (confirmation) {
    var codeEl = confirmation.querySelector('[data-rc-code]');
    var typeEl = confirmation.querySelector('[data-rc-type]');
    var dateEl = confirmation.querySelector('[data-rc-date]');
    var fallbackEl = confirmation.querySelector('[data-rc-fallback]');
    var raw = null;

    try {
      raw = sessionStorage.getItem(STORAGE_KEY);
      sessionStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      raw = null;
    }

    var parsed = null;

    if (raw) {
      try {
        parsed = JSON.parse(raw);
      } catch (error) {
        parsed = null;
      }
    }

    if (parsed) {
      if (codeEl) codeEl.textContent = parsed.code;
      if (typeEl) typeEl.textContent = parsed.type;
      if (dateEl) dateEl.textContent = new Date(parsed.date).toLocaleString();
    } else if (fallbackEl) {
      fallbackEl.hidden = false;
    }

    var printButton = confirmation.querySelector('[data-rc-print]');

    if (printButton) {
      printButton.addEventListener('click', function () {
        document.body.classList.add('rc-printing');
        window.print();
      });

      window.addEventListener('afterprint', function () {
        document.body.classList.remove('rc-printing');
      });
    }
  }

  function pad(value) {
    return value < 10 ? '0' + value : String(value);
  }
})();
