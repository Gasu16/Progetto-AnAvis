package com.anavis.springboot.controller;

import java.util.Hashtable;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.support.StaticApplicationContext;
import org.springframework.data.domain.Example;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.anavis.springboot.model.AccettazioneEmergenza;
import com.anavis.springboot.model.Donatore;
import com.anavis.springboot.model.Emergenza;

import com.anavis.springboot.repository.AccettazioneEmergenzaRepository;
import com.anavis.springboot.repository.DonatoreRepository;
import com.anavis.springboot.repository.EmergenzaRepository;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("api/")
public class EmergenzaController {
	
	@Autowired
	private EmergenzaRepository emergenzaRepository;
	
	@Autowired
	private DonatoreRepository donatoreRepository;
	
	@Autowired
	private AccettazioneEmergenzaRepository accettazioneEmergenzaRepository;
	
	
	public static long donatoriR;
	
	@GetMapping("emergenze")
	public List<Emergenza> getEmergenze(){
		
		// Ritorniamo la lista delle emergenze
		return this.emergenzaRepository.findAll();
	}
	
	@GetMapping("donatori")
	public List<Donatore> getDonatori(){		
		return this.donatoreRepository.findAll();
	}

	@GetMapping("donatori/{sangue}")
	public List<Donatore> getDonatori(@PathVariable String sangue){
		List<Donatore> donatori_disponibili = this.donatoreRepository.findBySangue(sangue);
		if(donatori_disponibili.isEmpty() == true) {
			// Non c'e' alcun donatore disponibile
			return null;
		}
		return donatori_disponibili;
	}
	
	@PostMapping("addemergenza")
	@ResponseBody
	public Emergenza addemergenza(@RequestParam String codiceEmergenza, @RequestParam String citta, @RequestParam String gruppoSanguigno){
		return this.emergenzaRepository.save(new Emergenza(codiceEmergenza, citta, gruppoSanguigno));
	}

	
	@Transactional
	@PostMapping("delemergenza")
	@ResponseBody
	public void delemergenza(@RequestParam String codiceEmergenza) {
		this.emergenzaRepository.deleteByCodiceEmergenza(codiceEmergenza);
	}
	
	@GetMapping("scegliemergenza/{citta}")
	@ResponseBody
	public List<Emergenza> scegliEmergenza(@PathVariable String citta) {
		return this.emergenzaRepository.findByCitta(citta);
	}
	
	@GetMapping("scegliemergenza/{citta}/{gruppoSanguigno}")
	@ResponseBody
	public List<Emergenza> scegliEmergenza(@PathVariable String citta, @PathVariable String gruppoSanguigno) {
		return this.emergenzaRepository.findAllByCittaAndGruppoSanguigno(citta, gruppoSanguigno);
	}
	
	
	@Transactional
	@PostMapping("postEmergenza")
	@ResponseBody
	public void postEmergenza(@RequestParam Long id, @RequestParam String citta, @RequestParam String gruppoSanguigno) {
		AccettazioneEmergenza accettazioneEmergenza = new AccettazioneEmergenza(id, citta, gruppoSanguigno);
		this.accettazioneEmergenzaRepository.save(accettazioneEmergenza);
	}
	
	@GetMapping("accettazioniemergenze")
	public List<AccettazioneEmergenza> getAccettazioneEmergenze(){
		return this.accettazioneEmergenzaRepository.findAll();
	}

	
	@GetMapping("accettazioniemergenze/{citta}")
	public List<AccettazioneEmergenza> getAccettazioneEmergenze(@PathVariable String citta){
		return this.accettazioneEmergenzaRepository.findByCitta(citta);
	}
	
}




