'use strict';

/**
 * facade controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::facade.facade');
