package com.anavis.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.anavis.springboot.model.Questionario;

@Repository
public interface QuestionarioRepository extends JpaRepository<Questionario, Long>{

}
