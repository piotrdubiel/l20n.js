'use strict';

module.exports = {
  gaia: {
    files: [
      {
        expand: true,
        cwd: 'dist/gecko/gaia',
        src: ['l20n.js'],
        dest: 'dist/gaia/shared/js/intl/'
      },
      {
        expand: true,
        cwd: 'dist/gecko/bridge',
        src: ['l20n-service.js', 'l20n-client.js'],
        dest: 'dist/gaia/shared/js/intl/'
      },
      {
        expand: true,
        cwd: 'dist/compat/gaia/build',
        src: ['l20n.js'],
        dest: 'dist/gaia/build/l10n/'
      },
    ]
  }
};
