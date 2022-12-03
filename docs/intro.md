---
sidebar_position: 1
title: Doc Template 
---

# Doc Template

```kotlin
interface CrashlyticsCalls {
    fun logMessage(message: String)
    fun sendHandledException(throwable: Throwable)
    fun sendFatalException(throwable: Throwable)
    fun setCustomValue(key: String, value: Any)
}
```