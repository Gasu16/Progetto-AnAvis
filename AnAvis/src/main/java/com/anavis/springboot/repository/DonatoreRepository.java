package com.anavis.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.anavis.springboot.model.Donatore;

@Repository
public interface DonatoreRepository extends JpaRepository<Donatore, Long>{

	List<Donatore> findBySangue(String sangue);
}
