# hi-log

前端日志/上报系统

## api

constructor(config)

```javascript
{
    project: "project-name",
    dev: false, // dev mode, defalut false , turn on this you can see log in console
    shake: true, // defualt true
    reportCb: () => {}, // report callback , you can send msg when user report their problems
}

```

log()


report()


shake()