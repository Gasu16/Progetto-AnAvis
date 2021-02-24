package com.anavis.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.anavis.springboot.model.AccettazioneEmergenza;
import com.anavis.springboot.model.Emergenza;

@Repository
public interface AccettazioneEmergenzaRepository extends JpaRepository<AccettazioneEmergenza, Long>{
	//List<Long> donatoriRichiesti();
	List<AccettazioneEmergenza> findByCitta(String citta);
}
