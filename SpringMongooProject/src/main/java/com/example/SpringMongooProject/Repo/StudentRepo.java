package com.example.SpringMongooProject.Repo;

import com.example.SpringMongooProject.Entity.Student;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface StudentRepo extends MongoRepository<Student,String> {

}
