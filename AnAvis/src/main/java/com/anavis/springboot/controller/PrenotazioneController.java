package com.anavis.springboot.controller;

import java.util.Hashtable;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.anavis.springboot.model.AnalisiSangue;
import com.anavis.springboot.model.Calendario;
import com.anavis.springboot.model.Prenotazione;
import com.anavis.springboot.model.Questionario;
import com.anavis.springboot.model.Sede;
import com.anavis.springboot.repository.AnalisiSangueRepository;
import com.anavis.springboot.repository.CalendarioRepository;
import com.anavis.springboot.repository.CalendarioSalvaRepository;
import com.anavis.springboot.repository.PrenotazioneRepository;
import com.anavis.springboot.repository.QuestionarioRepository;
import com.anavis.springboot.repository.SedeRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/")
public class PrenotazioneController {

	@Autowired
	private PrenotazioneRepository prenotazioneRepository;
	
	@Autowired
	private SedeRepository sedeRepository;
	
	@Autowired
	private CalendarioRepository calendarioRepository;
	
	@Autowired
	private QuestionarioRepository questionarioRepository;
	
	@Autowired
	private Hashtable<String, String> hashtable_calendario = new Hashtable<String, String>();
	
	@Autowired
	private CalendarioSalvaRepository calendarioSalvaRepository;
	
	@Autowired
	private AnalisiSangueRepository analisiSangueRepository;
	
	@GetMapping("prenotazioni")
	public List<Prenotazione> getPrenotazioni(){
		return this.prenotazioneRepository.findAll();
	}
	
	@GetMapping("prenotazioni/{id}")
	public Optional<Prenotazione> getPrenotazioni(@PathVariable Long id){
		return this.prenotazioneRepository.findById(id);
	}
	
	@GetMapping("sedi")
	public List<Sede> getSedi(){
		return this.sedeRepository.findAll();
	}
	
	@GetMapping("sedi/{codice}")
	public List<Sede> getSedi(@PathVariable String codice){
		return this.sedeRepository.findByCodice(codice);
	}
	
	@PostMapping("addsede")
	@ResponseBody
	public Sede addSede(@RequestParam String codice, @RequestParam String citta){
		return this.sedeRepository.save(new Sede(codice, citta));
	}

	
	@Transactional
	@PostMapping("delsede")
	@ResponseBody
	public void delSede(@RequestParam String codice) {
		this.sedeRepository.deleteByCodice(codice);
	}
	
	@GetMapping("date")
	public List<Calendario> getDate(){
		return this.calendarioRepository.findAll();
	}
	
	@GetMapping("date/{codice}")
	public List<Calendario> getDate(@PathVariable String codice){
		return this.calendarioRepository.findByCodice(codice);
	}
	
	@Transactional
	@PostMapping("deldata")
	@ResponseBody
	public void deldata(@RequestParam Long id, @RequestParam String codice, @RequestParam String data, @RequestParam String citta, @RequestParam String codiceFiscale) {
		this.calendarioRepository.deleteById(id);
		this.prenotazioneRepository.save(new Prenotazione(id, codice, data, citta, codiceFiscale));
	}

	@GetMapping("prenotazioni/{citta}/{data}")
	public List<Prenotazione> getPrenotazioniByCittaAndData(@PathVariable String citta, @PathVariable String data){
		return this.prenotazioneRepository.findAllByCittaAndData(citta, data);
	}
	
	@Transactional
	@PostMapping("prenotazioniAggiunte")
	@ResponseBody
	public void prenotazioniAggiunte(@RequestParam String citta, @RequestParam String data) {
		System.out.println("citta => " + citta);
		System.out.println("data => " + data);
	}
	
	@Transactional
	@PostMapping("analisi")
	@ResponseBody
	public void inviaAnalisi(@RequestParam String codiceFiscale, @RequestParam String emoglobina, @RequestParam String globuli_bianchi, @RequestParam String globuli_rossi, @RequestParam String piastrine) {
		this.analisiSangueRepository.save(new AnalisiSangue(codiceFiscale, emoglobina, globuli_bianchi, globuli_rossi, piastrine));
	}
	
	@GetMapping("analisi")
	public List<AnalisiSangue> getAnalisi(){
		return this.analisiSangueRepository.findAll();
	}
	

}
