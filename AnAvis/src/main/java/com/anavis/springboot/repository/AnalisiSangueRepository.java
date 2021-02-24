package com.anavis.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.anavis.springboot.model.AnalisiSangue;

@Repository
public interface AnalisiSangueRepository extends JpaRepository<AnalisiSangue, Long>{

}
