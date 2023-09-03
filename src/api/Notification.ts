import {ElNotification} from "element-plus/lib/components/index.js";

export default {
    succeed,
    warning
}

function succeed(title: string, message: string, duration?: number) {
    if (duration === undefined) {
        duration = 2000
    }

    ElNotification.success(
        {
            title,
            message,
            duration
        }
    )
}

function warning(title: string, message: string, duration?: number) {
    if (duration === undefined) {
        duration = 2000
    }

    ElNotification.warning(
        {
            title,
            message,
            duration
        }
    )
}