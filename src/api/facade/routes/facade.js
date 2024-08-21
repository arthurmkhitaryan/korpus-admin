'use strict';

/**
 * facade router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::facade.facade');
