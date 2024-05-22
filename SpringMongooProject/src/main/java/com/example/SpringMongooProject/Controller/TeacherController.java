package com.example.SpringMongooProject.Controller;

import com.example.SpringMongooProject.Entity.Teacher;
import com.example.SpringMongooProject.Service.TeacherServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("api/v1/teacher")
public class TeacherController {

    @Autowired
    private TeacherServices teacherServices;
    @PostMapping(value = "/save")
    private String saveStudent(@RequestBody Teacher teachers){

        teacherServices.saverUpdate(teachers);
        return teachers.get_id();
    }
    @GetMapping(value = "/getAll")
    private Iterable<Teacher>getTeachers(){

        return teacherServices.listAll();
    }
    @PutMapping(value = "/edit/{id}")
    private  Teacher update(@RequestBody Teacher teacher,@PathVariable(name = "id")String _id){
        teacher.set_id(_id);
        teacherServices.saverUpdate(teacher);
        return teacher;
    }
    @DeleteMapping(value = "/delete/{id}")
    private void deleteTeacher(@PathVariable("id")String _id){
        teacherServices.deleteTeacher(_id);
    }

    @RequestMapping("/teacher/{id}")
    private Teacher getTeachers(@PathVariable(name = "id")String teacherid){
        return teacherServices.getTeacherById(teacherid);
    }
}
