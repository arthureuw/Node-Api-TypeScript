import winston from 'winston';


const transports = [];
transports.push(
    new winston.transports.Console({
        format: winston.format.combine(
            winston.format.cli(),
            winston.format.splat()
        )
    })
);

const loggerInstance = winston.createLogger({
    level: "info",
    levels: winston.config.npm.levels,
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.json()
    ),
    transports
});

export default loggerInstance;
