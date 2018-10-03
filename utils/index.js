
const NOTIFICATION_KEY = 'NOTIFICATION'
import { AsyncStorage } from "react-native"
import { Notifications, Permissions } from 'expo'

export function idGenerator() {
    return Math.floor((1 + Math.random()) * Date.now())
        .toString(16)
        .substring(1)
}

export function clearLocalNotification() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
}



export function setLocalNotification() {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({ status }) => {
                        if (status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync()

                            let tomorrow = new Date()
                            tomorrow.setDate(tomorrow.getDate() + 1)
                            tomorrow.setHours(10)
                            tomorrow.setMintutes(22)

                            Notifications.scheduleLocalNotificationsAsync(
                                createNotification(),
                                {
                                    time: tomorrow,
                                    repeat: 'day',
                                }
                            )

                            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                        }
                    })
            }
        })
}

function createNotification() {
    return {
        title: 'Hey! You need Study',
        body: "👋 don't forget to study. Is important for you!",
        ios: {
            sound: true,
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
        }
    }
}