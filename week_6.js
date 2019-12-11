class ArithmeticTaskRunner {
  constructor() {
    this.tasks = Array();
  }
  AddNegationTask() {
    this.tasks.push(function(x) {
    x = -1 * x
    return x;
  })
}
  addAdditionTask(y) {
    this.tasks.push(function(x) {
      return (x+y);
    })
  }
  addMultiplicationTask(y) {
    this.tasks.push(function(x) {
      return (x*y);
    })
  };
  get taskCount() {
    return this.tasks.length;
  }
  execute(startValue) {
    if (startValue == null) {
      startValue = 0;
    }
    for (let i = 0; i<this.tasks.length ;i++ ){
      let x = this.tasks[i];
      startValue = x(startValue);
    }
    return startValue;
  }
}


print = console.log

print('Task Runner 1')

taskRunner = new ArithmeticTaskRunner()
taskRunner.addAdditionTask(10)
taskRunner.AddNegationTask()
taskRunner.addMultiplicationTask(0.5)

print(taskRunner.execute())
print(taskRunner.execute(10))
print(taskRunner.taskCount)

print('Task Runner 2')

taskRunner2 = new ArithmeticTaskRunner()
taskRunner2.addAdditionTask(2)
taskRunner2.addMultiplicationTask(4)
taskRunner2.addAdditionTask(10)

print(taskRunner2.execute(2))
print(taskRunner2.execute(-2))

print('Task Runner 3')

taskRunner3 = new ArithmeticTaskRunner()
taskRunner3.addAdditionTask(2)
taskRunner3.taskCount = 5

print(taskRunner3.taskCount)
