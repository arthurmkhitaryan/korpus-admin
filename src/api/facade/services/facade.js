'use strict';

/**
 * facade service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::facade.facade');
