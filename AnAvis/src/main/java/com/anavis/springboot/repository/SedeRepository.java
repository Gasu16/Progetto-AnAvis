package com.anavis.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.anavis.springboot.model.Sede;

@Repository
public interface SedeRepository extends JpaRepository<Sede, Long>{
	
	List<Sede> findByCodice(String codice);
	void deleteByCodice(String codice);
}
