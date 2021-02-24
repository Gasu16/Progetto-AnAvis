package com.anavis.springboot.repository;

import java.util.Hashtable;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.anavis.springboot.model.Calendario;

@Repository
public interface CalendarioRepository extends JpaRepository<Calendario, Long> {
	List<Calendario> findByCodice(String codice);
	void deleteByData(String data);
}
