package com.example.SpringMongooProject.Service;

import com.example.SpringMongooProject.Entity.Teacher;
import com.example.SpringMongooProject.Repo.TeacherRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TeacherServices {
    @Autowired
    private TeacherRepo teacherRepo;
    public void saverUpdate(Teacher teachers) {
        teacherRepo.save(teachers);

    }

    public Iterable<Teacher> listAll() {
        return  this.teacherRepo.findAll();

    }

    public void deleteTeacher(String id) {
        teacherRepo.deleteById(id);

    }

    public Teacher getTeacherById(String teacherid) {
        return teacherRepo.findById(teacherid).get();

    }
}
