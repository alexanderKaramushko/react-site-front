const aliases = (prefix = 'src') => ({
  '@api': `${prefix}/client/api/`,
  '@common': `${prefix}/client/common/`,
  '@components': `${prefix}/client/components/`,
  '@localization': `${prefix}/client/localization/`,
  '@models': `${prefix}/client/models/`,
  '@routes': `${prefix}/client/routes/`,
  '@store': `${prefix}/client/store/`,
  '@utils': `${prefix}/client/utils/`,
  '@server': `${prefix}/server/`,
});

module.exports = aliases;