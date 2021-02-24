package com.anavis.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.anavis.springboot.model.Calendario;

@Repository
public interface CalendarioSalvaRepository extends JpaRepository<Calendario, Long>{

}
