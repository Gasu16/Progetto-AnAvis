package com.anavis.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.anavis.springboot.model.Emergenza;

@Repository
public interface EmergenzaRepository extends JpaRepository<Emergenza, Long>{

	List<Emergenza> findByCodiceEmergenza(String codiceEmergenza);
	List<Emergenza> findByCitta(String citta);
	List<Emergenza> findAllByCittaAndGruppoSanguigno(String citta, String gruppoSanguigno);
	void deleteByCodiceEmergenza(String codiceEmergenza);
}
