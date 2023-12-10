# Пояснение лабораторной работы

## Задача разработки

Нашей задачей было в первую очередь создать лабораторную работу, которая будет удоблетворять следующим требованиям:
1. Лабораторная работа должна быть интересной для студентов.
2. Проверка лабораторной работы должна быть максимально автоматизирована и проста для преподователей.
3. Взлом лабораторной работы ресурсами студентов должен быть сложнее, чем ее выполнение.

:::tip Пояснение

Любая система и любая лабораторная может быть взломана, если студенты будут вкладывать в это достаточно ресурсов. Наша задача - сделать так, чтобы вкладывать ресурсы в взлом было сложнее, чем в выполнение.

:::

## Инструменты реализации

### Архитектура лабораторной

Лабораторная работа в нашем понимании должна занимать у студента как можно меньше времени для подготовки окружения и предоставлять возможность сосредоточиться на сущностном содержании работы. Поэтому мы решили, что мы будем использовать настроенные заранее виртуальные машины клиента и сервера, а студент будет работать с ними через созданную им виртуальную машину атакующего.

![Виртуальная сеть](/docs/4/img/4/topology.png)

### Проверка лабораторной работы

В целях автоматизации лабораторной работы мы используем следующую систему: при запуске ВМ сервера студент вводит свои ФИО и группу, ВМ шифрует их своим приватным ключом и начинает отправлять клиенту в качестве ответов на авторизацию. Таким образом, по полученным студентом данным мы можем определить, какая группа и ФИО студента, и, соответственно, проверить выполнил ли он работу самостоятельно. 

Так, если студент просто воспользуется ключами другого студента, оценка повторно выставится добросовестному студенту, а списывальщик все еще останется без оценки.

### Защита от взлома лабораторной работы

Защита от взлома крайне важна, так как в случае, если студент вытащит ключ из ВМ сервера, он сможет подписать любое кол-во фамилий за поразительно маленькое время. Поэтому виртуальные машины сервера и клиента зашифрованы при помощи [clevis tpm](https://github.com/latchset/clevis). Это обеспечивает высокую надежность шифрования и не дает студенту залезать на диск виртуальной машины, чтобы вытащить ключи.

:::danger Важно!

Хотя clevis и обеспечивает высокую надежность, она не 100% и взлом возможен. Поэтому мы рекомендуем в сомнительных случаях использовать контрольные вопросы, чтобы убедиться в том, что лабораторная действительно была выполнена.

:::