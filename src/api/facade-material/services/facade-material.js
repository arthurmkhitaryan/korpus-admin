'use strict';

/**
 * facade-material service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::facade-material.facade-material');
