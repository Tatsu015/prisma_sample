-- CreateTable
CREATE TABLE "Project" (
    "taskID" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    CONSTRAINT "Project_taskID_fkey" FOREIGN KEY ("taskID") REFERENCES "Task" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_taskID_key" ON "Project"("taskID");
