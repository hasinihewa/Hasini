package com.example.SpringMongooProject.Repo;

import com.example.SpringMongooProject.Entity.Teacher;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TeacherRepo extends MongoRepository<Teacher,String> {

}
